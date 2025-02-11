import './app-home.css';
import '../../components/app-map';
import { AppMap } from '../../components/app-map';

export class AppHome extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const mapElement = (<app-map />) as AppMap;
    const profileTableElement = (
      <gui-heatmap
        config={{
          yAxis: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            innerPadding: 0.1,
          },
          xAxis: { outerPadding: 0, innerPadding: 0.1 },
          colorScale: { colors: ['#fde725', '#21918c', '#440154'] },
        }}
      />
    ) as gc.GuiHeatmap;
    const stationTimeSeriesElement = (<gui-chart />) as gc.GuiChart;
    stationTimeSeriesElement.config = {
      series: [{ type: 'line', yAxis: 'left', yCol: 2, xCol: 0, title: 'Available Bikes' }],
      yAxes: { left: { format: '~s' } },
      xAxis: { scale: 'time' },
    };

    this.appendChild(
      <article>
        {mapElement}
        <div className="profile">
          <div className="empty-profile">
            <p>Click on a Station to view it's profile</p>
          </div>
          <h3>Typical Week Profile (availability)</h3>
          {profileTableElement}
          <hr />
          <h3>Historic Data</h3>
          <div style={{ display: 'flex' }}>
            <span
              style={{ rotate: '-90deg', alignSelf: 'center', textWrap: 'nowrap', width: '20px' }}
            >
              Available Bikes
            </span>
            {stationTimeSeriesElement}
          </div>
        </div>
      </article>,
    );

    mapElement.map.on('click', 'stations', async (e) => {
      if (!e.features?.[0]) return;
      try {
        const station = mapElement.stationsMap.get(e.features[0].id as number);
        if (!station) return;

        const profile = await gc.getStationProfile(station.ref);
        profileTableElement.value = profile;

        const timeSeries = await gc.getStationTimeSeries(station.ref, null, null);
        stationTimeSeriesElement.value = timeSeries;

        this.querySelector('.empty-profile')?.remove();
      } catch (error) {
        console.log(error);
      }
    });
  }

  disconnectedCallback() {
    this.replaceChildren();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-home': GreyCat.Element<AppHome>;
    }
  }
}

if (!customElements.get('app-home')) {
  customElements.define('app-home', AppHome);
}
