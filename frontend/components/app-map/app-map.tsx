import maplibregl, { StyleSpecification } from 'maplibre-gl';
import style from './styles.json';
import 'maplibre-gl/dist/maplibre-gl.css';
import './app-map.css';

export class AppMap extends HTMLElement {
  map!: maplibregl.Map;
  interval?: number;

  selectedTime = Date.now();

  stationsMap: Map<number, gc.StationDTO> = new Map();

  constructor() {
    super();
  }

  connectedCallback() {
    const container = document.createElement('div');

    this.map = new maplibregl.Map({
      container: container,
      style: style as StyleSpecification,
      center: [6.1, 49.6],
      zoom: 12,
    });

    this.appendChild(container);

    try {
      this.map.on('load', async () => {
        this.map.resize();

        this.map.addSource('stations', {
          type: 'geojson',
          data: { features: [], type: 'FeatureCollection' } as GeoJSON.FeatureCollection,
          cluster: true,
          clusterMaxZoom: 9,
          clusterRadius: 40,
        });
        await this.fetchGeoJson();

        this.map.addLayer({
          id: 'stations',
          type: 'circle',
          source: 'stations',
          paint: {
            'circle-color': [
              'interpolate',
              ['linear'],
              ['get', 'availability'],
              0,
              '#fde725',
              0.5,
              '#21918c',
              1,
              '#440154',
            ],
            'circle-radius': 6,
            'circle-stroke-color': 'black',
            'circle-stroke-width': 2,
          },
        });

        this.map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'stations',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': 'white',
            'circle-stroke-color': 'black',
            'circle-stroke-width': 1,
            'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 500, 40],
          },
        });

        this.map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'stations',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['Open Sans Bold'],
            'text-size': 12,
          },
        });
      });

      // Create a popup, but don't add it to the map yet.
      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      this.map.on('mouseenter', 'stations', (e) => {
        // Change the cursor style as a UI indicator.
        if (e.features === undefined) return;
        this.map.getCanvas().style.cursor = 'pointer';

        const coordinates = (e.features[0].geometry as GeoJSON.Point).coordinates as [
          number,
          number,
        ];

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.

        const station = this.stationsMap.get(e.features[0].id as number);
        if (station === undefined) return;

        popup
          .setLngLat(coordinates)
          .setDOMContent(
            <div>
              <h5>{station?.detail.name}</h5>
              <p>
                Total Stand:<span>{station.record?.bike_stands}</span>
              </p>
              <p>
                Available Bikes: <span>{station.record?.available_bikes} </span>
              </p>
              <p>
                Available Stands: <span>{station.record?.available_bike_stands}</span>
              </p>
              <span> {station.last_update.toString()} </span>
            </div>,
          )
          .addTo(this.map);
      });

      this.map.on('mouseleave', 'stations', () => {
        this.map.getCanvas().style.cursor = '';
        popup.remove();
      });

      this.map.on('dragend', () => {
        this.fetchGeoJson();
      });

      this.map.on('zoomend', () => {
        this.fetchGeoJson();
      });

      const start = Date.parse('2024-05-15T13:16:53.000Z');
      const end = Date.now();

      const timeSliderValue = <span> {new Date(this.selectedTime).toLocaleString()} </span>;

      const timeSlider = (
        <div id={'time-slider'}>
          <label htmlFor="">Time: {timeSliderValue}</label>
          <input
            id="time-slider-input"
            type="range"
            step={'3600000'}
            onchange={(e) => {
              //eslint-disable-next-line
              const val = parseInt((e.target as any).value);
              timeSliderValue.textContent = new Date(val).toLocaleString();
              const time = gc.core.time.fromMs(val);
              this.fetchGeoJson(time);
              this.selectedTime = val;
            }}
            min={start.toString()}
            max={end.toString()}
            value={start.toString()}
          />
          <sl-button
            style={{ width: '50px' }}
            onclick={(e) => {
              if (this.interval) {
                clearInterval(this.interval);
                this.interval = undefined;
                (e.target as HTMLButtonElement).textContent = '⏵';
              } else {
                const input = this.querySelector('#time-slider-input') as HTMLInputElement;
                (e.target as HTMLButtonElement).textContent = '⏸';
                this.interval = setInterval(() => {
                  input.value = (parseInt(input.value) + 3600000).toString();
                  if (input.value >= end.toString()) {
                    input.value = start.toString();
                    (e.target as HTMLButtonElement).textContent = '⏵';
                    input.dispatchEvent(new Event('change'));

                    clearInterval(this.interval);
                    this.interval = undefined;
                  }
                  input.dispatchEvent(new Event('change'));
                }, 500);
              }
            }}
          >
            ⏵
          </sl-button>
        </div>
      );

      this.appendChild(timeSlider);

      //Toggle time slider based on zoom level
      this.map.on('zoom', () => {
        const zoom = this.map.getZoom();

        if (zoom < 10) {
          this.querySelector('#time-slider')?.classList.add('disabled');
        } else if (zoom >= 10) {
          this.querySelector('#time-slider')?.classList.remove('disabled');
        }
      });
    } catch (err) {
      // handle potential error
      console.error(err);
    }
  }

  disconnectedCallback() {}

  async fetchGeoJson(t?: gc.core.time) {
    const bounds = this.map.getBounds();
    const from = gc.core.geo.fromLatLng(bounds.getSouthWest().lat, bounds.getSouthWest().lng);
    const to = gc.core.geo.fromLatLng(bounds.getNorthEast().lat, bounds.getNorthEast().lng);

    const data = await gc.getStations(from, to, t ?? null);

    this.stationsMap.clear();
    const features: GeoJSON.Feature[] = data.map((station, idx) => {
      this.stationsMap.set(idx, station);

      return {
        type: 'Feature',
        id: idx,
        geometry: {
          type: 'Point',
          coordinates: [station.coords.lng, station.coords.lat],
        },
        properties: {
          availability:
            Number(station.record?.available_bikes ?? 1) / Number(station.record?.bike_stands ?? 1),
          status: station.record?.status.key,
        },
      };
    });
    //eslint-disable-next-line
    (this.map.getSource('stations') as any).setData({
      type: 'FeatureCollection',
      features: features,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-map': AppMap;
  }

  namespace GreyCat {
    namespace JSX {
      interface IntrinsicElements {
        'app-map': GreyCat.Element<AppMap>;
      }
    }
  }
}

if (!customElements.get('app-map')) {
  customElements.define('app-map', AppMap);
}
