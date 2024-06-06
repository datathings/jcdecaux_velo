// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/web';
import * as project_n from '../../project_n/index.js';

export namespace project {
  export function startImportingScheduler($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('project::startImportingScheduler', undefined, $signal);
  }
}

export namespace importer {
}

export namespace api {
  export class StationDTO extends $sdk.GCObject {
    static readonly _type = 'api::StationDTO';

    ref: $sdk.std.core.node;
    coords: $sdk.std.core.geo;
    detail: model.StationDetail;
    record: model.StationRecord | null;
    last_update: $sdk.std.core.time;

    static createFrom({ref, coords, detail, record, last_update}: {ref: $sdk.std.core.node, coords: $sdk.std.core.geo, detail: model.StationDetail, record: model.StationRecord | null, last_update: $sdk.std.core.time}, $g: $sdk.GreyCat = globalThis.greycat.default): StationDTO {
      return new StationDTO($g.abi.libs_by_name.get(projectlib.name)!.mapped[0], ref, coords, detail, record, last_update);
    }
    static create(ref: $sdk.std.core.node, coords: $sdk.std.core.geo, detail: model.StationDetail, record: model.StationRecord | null, last_update: $sdk.std.core.time, $g: $sdk.GreyCat = globalThis.greycat.default): StationDTO {
      return new StationDTO($g.abi.libs_by_name.get(projectlib.name)!.mapped[0], ref, coords, detail, record, last_update);
    }
  }

  export function getStations(from: $sdk.std.core.geo, to: $sdk.std.core.geo, t: $sdk.std.core.time | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<api.StationDTO>> {
    return $g.call('api::getStations', [from, to, t], $signal);
  }
  export function getStationProfile(station: $sdk.std.core.node, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<$sdk.std.core.Table> {
    return $g.call('api::getStationProfile', [station], $signal);
  }
  export function getStationTimeSeries(station: $sdk.std.core.node, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<$sdk.std.core.Table> {
    return $g.call('api::getStationTimeSeries', [station, from, to], $signal);
  }
}

export namespace model {
  export class Contract extends $sdk.GCObject {
    static readonly _type = 'model::Contract';

    name: string;
    commercial_name: string | null;
    country_code: string | null;
    cities: globalThis.Array<string> | null;
    stations: $sdk.std.core.nodeIndex;

    static createFrom({name, commercial_name, country_code, cities, stations}: {name: string, commercial_name: string | null, country_code: string | null, cities: globalThis.Array<string> | null, stations: $sdk.std.core.nodeIndex}, $g: $sdk.GreyCat = globalThis.greycat.default): Contract {
      return new Contract($g.abi.libs_by_name.get(projectlib.name)!.mapped[1], name, commercial_name, country_code, cities, stations);
    }
    static create(name: string, commercial_name: string | null, country_code: string | null, cities: globalThis.Array<string> | null, stations: $sdk.std.core.nodeIndex, $g: $sdk.GreyCat = globalThis.greycat.default): Contract {
      return new Contract($g.abi.libs_by_name.get(projectlib.name)!.mapped[1], name, commercial_name, country_code, cities, stations);
    }
  }

  export class StationStatus extends $sdk.GCEnum {
    static readonly _type = 'model::StationStatus';

    constructor(type: $sdk.AbiType, offset: number, public key: StationStatus.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static open($g: $sdk.GreyCat = globalThis.greycat.default): StationStatus {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[2];
      return t.static_values['open'];
    }
    static closed($g: $sdk.GreyCat = globalThis.greycat.default): StationStatus {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[2];
      return t.static_values['closed'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): StationStatus[] {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[2];
      return t.enum_values!;
    }
  }

  export namespace StationStatus  {
    export type Field = 'open'|'closed';
  }
  export class StationRecord extends $sdk.GCObject {
    static readonly _type = 'model::StationRecord';

    status: model.StationStatus;
    bike_stands: bigint | number;
    available_bike_stands: bigint | number;
    available_bikes: bigint | number;

    static createFrom({status, bike_stands, available_bike_stands, available_bikes}: {status: model.StationStatus, bike_stands: bigint | number, available_bike_stands: bigint | number, available_bikes: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): StationRecord {
      return new StationRecord($g.abi.libs_by_name.get(projectlib.name)!.mapped[3], status, bike_stands, available_bike_stands, available_bikes);
    }
    static create(status: model.StationStatus, bike_stands: bigint | number, available_bike_stands: bigint | number, available_bikes: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): StationRecord {
      return new StationRecord($g.abi.libs_by_name.get(projectlib.name)!.mapped[3], status, bike_stands, available_bike_stands, available_bikes);
    }
  }

  export class StationProfile extends $sdk.GCObject {
    static readonly _type = 'model::StationProfile';

    hourlyProfile: $sdk.std.util.GaussianProfile;

    static createFrom({hourlyProfile}: {hourlyProfile: $sdk.std.util.GaussianProfile}, $g: $sdk.GreyCat = globalThis.greycat.default): StationProfile {
      return new StationProfile($g.abi.libs_by_name.get(projectlib.name)!.mapped[4], hourlyProfile);
    }
    static create(hourlyProfile: $sdk.std.util.GaussianProfile, $g: $sdk.GreyCat = globalThis.greycat.default): StationProfile {
      return new StationProfile($g.abi.libs_by_name.get(projectlib.name)!.mapped[4], hourlyProfile);
    }
  }

  export class Station extends $sdk.GCObject {
    static readonly _type = 'model::Station';

    number: bigint | number;
    position: $sdk.std.core.geo;
    detail: $sdk.std.core.node;
    records: $sdk.std.core.nodeTime;
    contract: $sdk.std.core.node;
    profile: $sdk.std.core.node;

    static createFrom({number, position, detail, records, contract, profile}: {number: bigint | number, position: $sdk.std.core.geo, detail: $sdk.std.core.node, records: $sdk.std.core.nodeTime, contract: $sdk.std.core.node, profile: $sdk.std.core.node}, $g: $sdk.GreyCat = globalThis.greycat.default): Station {
      return new Station($g.abi.libs_by_name.get(projectlib.name)!.mapped[5], number, position, detail, records, contract, profile);
    }
    static create(number: bigint | number, position: $sdk.std.core.geo, detail: $sdk.std.core.node, records: $sdk.std.core.nodeTime, contract: $sdk.std.core.node, profile: $sdk.std.core.node, $g: $sdk.GreyCat = globalThis.greycat.default): Station {
      return new Station($g.abi.libs_by_name.get(projectlib.name)!.mapped[5], number, position, detail, records, contract, profile);
    }
  }

  export class StationDetail extends $sdk.GCObject {
    static readonly _type = 'model::StationDetail';

    name: string;
    address: string;
    banking: boolean;
    bonus: boolean;

    static createFrom({name, address, banking, bonus}: {name: string, address: string, banking: boolean, bonus: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): StationDetail {
      return new StationDetail($g.abi.libs_by_name.get(projectlib.name)!.mapped[6], name, address, banking, bonus);
    }
    static create(name: string, address: string, banking: boolean, bonus: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): StationDetail {
      return new StationDetail($g.abi.libs_by_name.get(projectlib.name)!.mapped[6], name, address, banking, bonus);
    }
  }

}

export namespace $anon$ {
  export class Anon0 extends $sdk.GCObject {
    static readonly _type = '::<lat,lng>';

    lat: any;
    lng: any;
  }
  export class Anon1 extends $sdk.GCObject {
    static readonly _type = '::<name,cities,commercial_name,country_code,stations>';

    name: any;
    cities: any;
    commercial_name: any;
    country_code: any;
    stations: any;
  }
  export class Anon2 extends $sdk.GCObject {
    static readonly _type = '::<number,position,detail>';

    number: any;
    position: any;
    detail: any;
  }
}

export const projectlib: $sdk.Library = {
  name: 'project',
  mapped: new globalThis.Array(10),
  configure(loaders, factories) {
    factories.set(api.StationDTO._type, api.StationDTO);
    factories.set(model.Contract._type, model.Contract);
    factories.set(model.StationStatus._type, model.StationStatus);
    factories.set(model.StationRecord._type, model.StationRecord);
    factories.set(model.StationProfile._type, model.StationProfile);
    factories.set(model.Station._type, model.Station);
    factories.set(model.StationDetail._type, model.StationDetail);
    factories.set($anon$.Anon0._type, $anon$.Anon0);
    factories.set($anon$.Anon1._type, $anon$.Anon1);
    factories.set($anon$.Anon2._type, $anon$.Anon2);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(api.StationDTO._type);
    this.mapped[1] = abi.type_by_fqn.get(model.Contract._type);
    this.mapped[2] = abi.type_by_fqn.get(model.StationStatus._type);
    this.mapped[2]?.resolveGeneratedOffsetWithValues('open', "open",'closed', "closed");
    this.mapped[3] = abi.type_by_fqn.get(model.StationRecord._type);
    this.mapped[4] = abi.type_by_fqn.get(model.StationProfile._type);
    this.mapped[5] = abi.type_by_fqn.get(model.Station._type);
    this.mapped[6] = abi.type_by_fqn.get(model.StationDetail._type);
    this.mapped[7] = abi.type_by_fqn.get($anon$.Anon0._type);
    this.mapped[8] = abi.type_by_fqn.get($anon$.Anon1._type);
    this.mapped[9] = abi.type_by_fqn.get($anon$.Anon2._type);
  },
};
