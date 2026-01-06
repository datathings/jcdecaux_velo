// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
/* oxlint-disable */
declare namespace gc {
  namespace project {
    class Root extends gc.sdk.GCObject {
      static readonly _type = 'project::Root';
      static readonly $fields: Root.$Fields;
      "model::stations_by_geo": gc.core.nodeGeo<gc.core.node<gc.model.Station>>;
      "model::contracts_by_name": gc.core.nodeIndex<string, gc.core.node<gc.model.Contract>>;
    }
    namespace Root {
      interface $Fields {
        "model::stations_by_geo": 0;
        "model::contracts_by_name": 1;
      }
    }

  }

  namespace model {
    class StationProfile extends gc.sdk.GCObject {
      static readonly _type = 'model::StationProfile';
      static readonly $fields: StationProfile.$Fields;
      hourlyProfile: gc.util.GaussianProfile;
      hourlyQuantizer: gc.util.MultiQuantizer;
      constructor(hourlyProfile: gc.util.GaussianProfile, hourlyQuantizer: gc.util.MultiQuantizer);
      static createFrom(fields: {hourlyProfile: gc.util.GaussianProfile, hourlyQuantizer: gc.util.MultiQuantizer}): StationProfile;
    }
    namespace StationProfile {
      interface $Fields {
        hourlyProfile: 0;
        hourlyQuantizer: 1;
      }
    }

    class Station extends gc.sdk.GCObject {
      static readonly _type = 'model::Station';
      static readonly $fields: Station.$Fields;
      number: number | bigint;
      position: gc.core.geo;
      detail: gc.core.node<gc.model.StationDetail>;
      records: gc.core.nodeTime<gc.model.StationRecord>;
      contract: gc.core.node<gc.model.Contract>;
      profile: gc.core.node<gc.model.StationProfile>;
      constructor(number: number | bigint, position: gc.core.geo, detail: gc.core.node<gc.model.StationDetail>, records: gc.core.nodeTime<gc.model.StationRecord>, contract: gc.core.node<gc.model.Contract>, profile: gc.core.node<gc.model.StationProfile>);
      static createFrom(fields: {number: number | bigint, position: gc.core.geo, detail: gc.core.node<gc.model.StationDetail>, records: gc.core.nodeTime<gc.model.StationRecord>, contract: gc.core.node<gc.model.Contract>, profile: gc.core.node<gc.model.StationProfile>}): Station;
    }
    namespace Station {
      interface $Fields {
        number: 0;
        position: 1;
        detail: 2;
        records: 3;
        contract: 4;
        profile: 5;
      }
    }

    class StationDetail extends gc.sdk.GCObject {
      static readonly _type = 'model::StationDetail';
      static readonly $fields: StationDetail.$Fields;
      name: string;
      address: string;
      banking: boolean;
      bonus: boolean;
      constructor(name: string, address: string, banking: boolean, bonus: boolean);
      static createFrom(fields: {name: string, address: string, banking: boolean, bonus: boolean}): StationDetail;
    }
    namespace StationDetail {
      interface $Fields {
        name: 0;
        address: 1;
        banking: 2;
        bonus: 3;
      }
    }

    class Contract extends gc.sdk.GCObject {
      static readonly _type = 'model::Contract';
      static readonly $fields: Contract.$Fields;
      name: string;
      commercial_name: string | null;
      country_code: string | null;
      cities: globalThis.Array<string> | null;
      stations: gc.core.nodeIndex<number | bigint, gc.core.node<gc.model.Station>>;
      constructor(name: string, commercial_name: string | null, country_code: string | null, cities: globalThis.Array<string> | null, stations: gc.core.nodeIndex<number | bigint, gc.core.node<gc.model.Station>>);
      static createFrom(fields: {name: string, commercial_name?: string | null, country_code?: string | null, cities?: globalThis.Array<string> | null, stations: gc.core.nodeIndex<number | bigint, gc.core.node<gc.model.Station>>}): Contract;
    }
    namespace Contract {
      interface $Fields {
        name: 0;
        commercial_name: 1;
        country_code: 2;
        cities: 3;
        stations: 4;
      }
    }

    class StationStatus extends gc.sdk.GCEnum {
      static readonly _type = 'model::StationStatus';
      static readonly $fields: StationStatus[];
      key: StationStatus.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: StationStatus.Field);
      static OPEN: StationStatus;
      static CLOSED: StationStatus;
    }
    namespace StationStatus  {
      type Field = "OPEN"|"CLOSED";
    }

    class StationRecord extends gc.sdk.GCObject {
      static readonly _type = 'model::StationRecord';
      static readonly $fields: StationRecord.$Fields;
      status: gc.model.StationStatus;
      bike_stands: number | bigint;
      available_bike_stands: number | bigint;
      available_bikes: number | bigint;
      constructor(status: gc.model.StationStatus, bike_stands: number | bigint, available_bike_stands: number | bigint, available_bikes: number | bigint);
      static createFrom(fields: {status: gc.model.StationStatus, bike_stands: number | bigint, available_bike_stands: number | bigint, available_bikes: number | bigint}): StationRecord;
    }
    namespace StationRecord {
      interface $Fields {
        status: 0;
        bike_stands: 1;
        available_bike_stands: 2;
        available_bikes: 3;
      }
    }

  }

  namespace importer {
    class InternalStationDTO extends gc.sdk.GCObject {
      static readonly _type = 'importer::InternalStationDTO';
      static readonly $fields: InternalStationDTO.$Fields;
      number: number | bigint;
      position: gc.core.geo;
      detail: gc.model.StationDetail;
      constructor(number: number | bigint, position: gc.core.geo, detail: gc.model.StationDetail);
      static createFrom(fields: {number: number | bigint, position: gc.core.geo, detail: gc.model.StationDetail}): InternalStationDTO;
    }
    namespace InternalStationDTO {
      interface $Fields {
        number: 0;
        position: 1;
        detail: 2;
      }
    }

    class InternalRecordsDTO extends gc.sdk.GCObject {
      static readonly _type = 'importer::InternalRecordsDTO';
      static readonly $fields: InternalRecordsDTO.$Fields;
      time: gc.core.time;
      status: gc.model.StationStatus;
      availableBikes: number | bigint;
      availableBikeStands: number | bigint;
      bikeStands: number | bigint;
      constructor(time: gc.core.time, status: gc.model.StationStatus, availableBikes: number | bigint, availableBikeStands: number | bigint, bikeStands: number | bigint);
      static createFrom(fields: {time: gc.core.time, status: gc.model.StationStatus, availableBikes: number | bigint, availableBikeStands: number | bigint, bikeStands: number | bigint}): InternalRecordsDTO;
    }
    namespace InternalRecordsDTO {
      interface $Fields {
        time: 0;
        status: 1;
        availableBikes: 2;
        availableBikeStands: 3;
        bikeStands: 4;
      }
    }

    class JsonStation extends gc.sdk.GCObject {
      static readonly _type = 'importer::JsonStation';
      static readonly $fields: JsonStation.$Fields;
      number: number | bigint;
      contract_name: string;
      name: string;
      address: string;
      position: gc.core.geo;
      banking: boolean;
      bonus: boolean;
      bike_stands: number | bigint;
      available_bike_stands: number | bigint;
      available_bikes: number | bigint;
      status: gc.model.StationStatus;
      last_update: number | bigint;
      constructor(number: number | bigint, contract_name: string, name: string, address: string, position: gc.core.geo, banking: boolean, bonus: boolean, bike_stands: number | bigint, available_bike_stands: number | bigint, available_bikes: number | bigint, status: gc.model.StationStatus, last_update: number | bigint);
      static createFrom(fields: {number: number | bigint, contract_name: string, name: string, address: string, position: gc.core.geo, banking: boolean, bonus: boolean, bike_stands: number | bigint, available_bike_stands: number | bigint, available_bikes: number | bigint, status: gc.model.StationStatus, last_update: number | bigint}): JsonStation;
    }
    namespace JsonStation {
      interface $Fields {
        number: 0;
        contract_name: 1;
        name: 2;
        address: 3;
        position: 4;
        banking: 5;
        bonus: 6;
        bike_stands: 7;
        available_bike_stands: 8;
        available_bikes: 9;
        status: 10;
        last_update: 11;
      }
    }

    class JsonContract extends gc.sdk.GCObject {
      static readonly _type = 'importer::JsonContract';
      static readonly $fields: JsonContract.$Fields;
      name: string;
      commercial_name: string | null;
      country_code: string | null;
      cities: globalThis.Array<string> | null;
      constructor(name: string, commercial_name?: string | null, country_code?: string | null, cities?: globalThis.Array<string> | null);
      static createFrom(fields: {name: string, commercial_name?: string | null, country_code?: string | null, cities?: globalThis.Array<string> | null}): JsonContract;
    }
    namespace JsonContract {
      interface $Fields {
        name: 0;
        commercial_name: 1;
        country_code: 2;
        cities: 3;
      }
    }

    class InternalContractDTO extends gc.sdk.GCObject {
      static readonly _type = 'importer::InternalContractDTO';
      static readonly $fields: InternalContractDTO.$Fields;
      name: string;
      cities: globalThis.Array<string> | null;
      commercial_name: string | null;
      country_code: string | null;
      stations: globalThis.Array<gc.importer.InternalStationDTO>;
      constructor(name: string, cities: globalThis.Array<string> | null, commercial_name: string | null, country_code: string | null, stations: globalThis.Array<gc.importer.InternalStationDTO>);
      static createFrom(fields: {name: string, cities?: globalThis.Array<string> | null, commercial_name?: string | null, country_code?: string | null, stations: globalThis.Array<gc.importer.InternalStationDTO>}): InternalContractDTO;
    }
    namespace InternalContractDTO {
      interface $Fields {
        name: 0;
        cities: 1;
        commercial_name: 2;
        country_code: 3;
        stations: 4;
      }
    }

  }

  namespace api {
    class getStations$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getStations$args';
      static readonly $fields: getStations$args.$Fields;
      from: gc.core.geo;
      to: gc.core.geo;
      t: gc.core.time | null;
      constructor(from: gc.core.geo, to: gc.core.geo, t?: gc.core.time | null);
      static createFrom(fields: {from: gc.core.geo, to: gc.core.geo, t?: gc.core.time | null}): getStations$args;
    }
    namespace getStations$args {
      interface $Fields {
        from: 0;
        to: 1;
        t: 2;
      }
    }

    class StationView extends gc.sdk.GCObject {
      static readonly _type = 'api::StationView';
      static readonly $fields: StationView.$Fields;
      stations: globalThis.Array<gc.api.StationItemView>;
      minTime: gc.core.time | null;
      maxTime: gc.core.time | null;
      constructor(stations: globalThis.Array<gc.api.StationItemView>, minTime?: gc.core.time | null, maxTime?: gc.core.time | null);
      static createFrom(fields: {stations: globalThis.Array<gc.api.StationItemView>, minTime?: gc.core.time | null, maxTime?: gc.core.time | null}): StationView;
    }
    namespace StationView {
      interface $Fields {
        stations: 0;
        minTime: 1;
        maxTime: 2;
      }
    }

    class StationItemView extends gc.sdk.GCObject {
      static readonly _type = 'api::StationItemView';
      static readonly $fields: StationItemView.$Fields;
      ref: gc.core.node<gc.model.Station>;
      coords: gc.core.geo;
      detail: gc.model.StationDetail;
      record: gc.model.StationRecord | null;
      last_update: gc.core.time;
      constructor(ref: gc.core.node<gc.model.Station>, coords: gc.core.geo, detail: gc.model.StationDetail, record: gc.model.StationRecord | null, last_update: gc.core.time);
      static createFrom(fields: {ref: gc.core.node<gc.model.Station>, coords: gc.core.geo, detail: gc.model.StationDetail, record?: gc.model.StationRecord | null, last_update: gc.core.time}): StationItemView;
    }
    namespace StationItemView {
      interface $Fields {
        ref: 0;
        coords: 1;
        detail: 2;
        record: 3;
        last_update: 4;
      }
    }

    class getStationProfile$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getStationProfile$args';
      static readonly $fields: getStationProfile$args.$Fields;
      station: gc.core.node<gc.model.Station>;
      constructor(station: gc.core.node<gc.model.Station>);
      static createFrom(fields: {station: gc.core.node<gc.model.Station>}): getStationProfile$args;
    }
    namespace getStationProfile$args {
      interface $Fields {
        station: 0;
      }
    }

    class getStationTimeSeries$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getStationTimeSeries$args';
      static readonly $fields: getStationTimeSeries$args.$Fields;
      station: gc.core.node<gc.model.Station>;
      from: gc.core.time | null;
      to: gc.core.time | null;
      constructor(station: gc.core.node<gc.model.Station>, from?: gc.core.time | null, to?: gc.core.time | null);
      static createFrom(fields: {station: gc.core.node<gc.model.Station>, from?: gc.core.time | null, to?: gc.core.time | null}): getStationTimeSeries$args;
    }
    namespace getStationTimeSeries$args {
      interface $Fields {
        station: 0;
        from: 1;
        to: 2;
      }
    }

    /**
     * `from`: the top right corner of the map
     * `to`: the bottom left corner of the map
     */
    const getStations: gc.sdk.ExposedFn<[gc.core.geo, gc.core.geo, gc.core.time | null | undefined], gc.api.StationView>;
    /**
     * Return the profile of a station to visualize as a Heatmap  where the cols are the hours of the day and the rows are the days of the week
     */
    const getStationProfile: gc.sdk.ExposedFn<[gc.core.node<gc.model.Station>], gc.core.Table>;
    const getStationTimeSeries: gc.sdk.ExposedFn<[gc.core.node<gc.model.Station>, gc.core.time | null | undefined, gc.core.time | null | undefined], gc.core.Table>;
  }

  interface $TypesMap {
    'core::Array<core::int?>': 0,
    'core::geo': 0,
    'core::Array<core::SearchResult<core::int,core::node<model::Station>>>': 0,
    'core::Array<io::File>': 0,
    'core::t3': 0,
    'core::Array<core::node?>': 0,
    'core::Tuple<core::geo,core::node<model::Station>>': 0,
    'core::float': 0,
    'core::t4': 0,
    'core::SearchResult<core::String,core::node<model::Contract>>': 0,
    'core::GeoBox': 0,
    'core::t2': 0,
    'core::Map<core::String,runtime::PathItemObject>': 0,
    'core::Array<runtime::Frame>': 0,
    'core::Array<core::nodeIndex>': 0,
    'core::String': 0,
    'core::NodeInfo<core::time>': 0,
    'core::Map<core::String,core::any>': 0,
    'core::nodeList': 0,
    'core::field': 0,
    'core::nodeTime<model::StationRecord>': 0,
    'core::Array<runtime::PathItemObject>': 0,
    'core::Array<runtime::ResponseObject>': 0,
    'core::time': 0,
    'core::NodeInfo<core::int>': 0,
    'core::nodeIndexBucket<core::node<core::Tensor>,core::any?>': 0,
    'core::NodeInfo<core::geo>': 0,
    'core::Array<runtime::Permission>': 0,
    'core::Array<util::HistogramBin>': 0,
    'core::Map': 0,
    'core::Array<core::ErrorFrame>': 0,
    'core::Array<runtime::DateTuple>': 0,
    'core::VectorVertex': 0,
    'core::Array<runtime::McpTool>': 0,
    'core::t4f': 0,
    'core::nodeIndex<core::String,core::node<model::Contract>>': 0,
    'core::nodeIndexBucket<core::int,core::node<model::Station>>': 0,
    'core::Map<core::String,core::int>': 0,
    'core::Array<core::nodeTime>': 0,
    'core::TimeZone': 0,
    'core::Map<core::String,runtime::ResponseObject>': 0,
    'core::Array<core::geo>': 0,
    'core::Array<core::Map<core::String,core::any>>': 0,
    'core::nodeGeo$sample$args': 0,
    'core::GeoCircle': 0,
    'core::Array<core::NodeInfo<core::int>>': 0,
    'core::Array<util::Quantizer>': 0,
    'core::null': 0,
    'core::node': 0,
    'core::nodeGeo$info$args': 0,
    'core::Array<runtime::MediaTypeObject>': 0,
    'core::TableColumnMapping': 0,
    'core::Array<core::SearchResult<core::Tensor,core::any?>>': 0,
    'core::TensorDistance': 0,
    'core::Array<runtime::HeaderObject>': 0,
    'core::Array<runtime::SecurityEntity>': 0,
    'core::node<model::StationDetail>': 0,
    'core::Table': 0,
    'core::str': 0,
    'core::bool': 0,
    'core::Array<core::NodeInfo>': 0,
    'core::Array<api::StationItemView>': 0,
    'core::Array<model::StationRecord>': 0,
    'core::Table<core::Tuple<core::time,core::any?>>': 0,
    'core::duration': 0,
    'core::Array': 0,
    'core::Array<runtime::McpContentBlock>': 0,
    'core::Array<core::node<core::VectorVertex>?>': 0,
    'core::nodeTime$sample$args': 0,
    'core::any': 0,
    'core::char': 0,
    'core::Array<core::TableColumnMapping>': 0,
    'core::ErrorCode': 0,
    'core::nodeIndex<core::node<core::Tensor>,core::any?>': 0,
    'core::Array<core::int>': 0,
    'core::Array<core::SearchResult<core::String,core::node<model::Contract>>>': 0,
    'core::Array<importer::JsonContract>': 0,
    'core::Date': 0,
    'core::SearchResult': 0,
    'core::Tuple<core::time,model::StationRecord>': 0,
    'core::function': 0,
    'core::Table<util::GaussianProfileSlot?>': 0,
    'core::nodeGeo': 0,
    'core::Array<core::nodeGeo>': 0,
    'core::nodeTime$info$args': 0,
    'core::NodeInfo': 0,
    'core::CalendarUnit': 0,
    'core::node$resolve_all$args': 0,
    'core::VectorIndex': 0,
    'core::Array<core::SearchResult<core::node<core::Tensor>,core::any?>>': 0,
    'core::Array<runtime::UserCredential>': 0,
    'core::node<model::Contract>': 0,
    'core::t2f': 0,
    'core::Array<core::NodeInfo<core::geo>>': 0,
    'core::Map<core::any,core::int>': 0,
    'core::Tuple<core::int,core::any?>': 0,
    'core::nodeIndex<core::int,core::node<model::Station>>': 0,
    'core::node<core::Tensor>': 0,
    'core::nodeTime': 0,
    'core::nodeList$sample$args': 0,
    'core::nodeIndexBucket': 0,
    'core::nodeList$info$args': 0,
    'core::Array<importer::InternalStationDTO>': 0,
    'core::Array<runtime::SchemaObject>': 0,
    'core::FloatPrecision': 0,
    'core::Map<core::String,runtime::UserCredential>': 0,
    'core::Tensor': 0,
    'core::Array<core::any>': 0,
    'core::Map<core::String,core::Map<core::String,core::any>>': 0,
    'core::node<model::Station>': 0,
    'core::TensorType': 0,
    'core::Array<core::String>': 0,
    'core::DurationUnit': 0,
    'core::Array<runtime::McpRole>': 0,
    'core::nodeIndex$info$args': 0,
    'core::nodeIndex$sample$args': 0,
    'core::Tuple<core::geo,core::any?>': 0,
    'core::Array<util::Quantizer<core::int>>': 0,
    'core::nodeGeo<core::node<model::Station>>': 0,
    'core::SortOrder': 0,
    'core::Array<runtime::PeriodicTask>': 0,
    'core::Tuple<core::time,core::any?>': 0,
    'core::SearchResult<core::node<core::Tensor>,core::any?>': 0,
    'core::Array<core::SearchResult>': 0,
    'core::Array<core::nodeList>': 0,
    'core::Map<core::String,core::String>': 0,
    'core::Array<runtime::Variable>': 0,
    'core::type': 0,
    'core::SamplingMode': 0,
    'core::node<model::StationProfile>': 0,
    'core::Map<core::String,runtime::SchemaObject>': 0,
    'core::Table$applyMappings$args': 0,
    'core::nodeIndex': 0,
    'core::nodeIndex$search_closest$args': 0,
    'core::Map<core::String,runtime::MediaTypeObject>': 0,
    'core::Array<core::NodeInfo<core::time>>': 0,
    'core::Array<core::field>': 0,
    'core::Error': 0,
    'core::GeoPoly': 0,
    'core::SearchResult<core::Tensor,core::any?>': 0,
    'core::Array<io::CsvColumnStatistics>': 0,
    'core::Array<importer::JsonStation>': 0,
    'core::Array<runtime::Role>': 0,
    'core::Map<core::String,runtime::HeaderObject>': 0,
    'core::Tuple': 0,
    'core::MathConstants': 0,
    'core::SearchResult<core::int,core::node<model::Station>>': 0,
    'core::Array<runtime::Job>': 0,
    'core::Array<core::float>': 0,
    'core::nodeTimeCursor': 0,
    'core::t3f': 0,
    'core::int': 0,
    'core::Array<runtime::DayOfWeek>': 0,
    'core::nodeIndexBucket<core::String,core::node<model::Contract>>': 0,
    'core::ErrorFrame': 0,
    'core::Buffer': 0,
    'core::node<core::VectorVertex>': 0,
    'core::Array<runtime::UserGroupPolicy>': 0,
    'core::Array<runtime::Task>': 0,
    'runtime::Task': 0,
    'runtime::SchemaFormat': 0,
    'runtime::SecurityFields': 0,
    'runtime::Month': 0,
    'runtime::OpenIDConnect': 0,
    'runtime::McpAnnotations': 0,
    'runtime::Debug': 0,
    'runtime::MonthlyPeriodicity': 0,
    'runtime::ChildProcessResult': 0,
    'runtime::McpResourceContent': 0,
    'runtime::Job': 0,
    'runtime::Debug$get$args': 0,
    'runtime::UserGroup': 0,
    'runtime::McpImplementation': 0,
    'runtime::McpContentBlock': 0,
    'runtime::McpRole': 0,
    'runtime::McpImageContent': 0,
    'runtime::User$me$args': 0,
    'runtime::User$setPassword$args': 0,
    'runtime::SchemaType': 0,
    'runtime::McpResult': 0,
    'runtime::McpServerToolsCapabilities': 0,
    'runtime::Task$cancel$args': 0,
    'runtime::McpTextContent': 0,
    'runtime::Permission': 0,
    'runtime::Task$history$args': 0,
    'runtime::PathItemObject': 0,
    'runtime::McpToolsCallResult': 0,
    'runtime::SecurityPolicy': 0,
    'runtime::User$logout$args': 0,
    'runtime::SecurityEntity$all$args': 0,
    'runtime::SecurityFields$set$args': 0,
    'runtime::Scheduler$deactivate$args': 0,
    'runtime::FixedPeriodicity': 0,
    'runtime::Scheduler$list$args': 0,
    'runtime::Runtime$backup_full$args': 0,
    'runtime::MergeStrategy': 0,
    'runtime::McpAudioContent': 0,
    'runtime::MediaTypeObject': 0,
    'runtime::McpInitializeParams': 0,
    'runtime::mcp_tools_list$args': 0,
    'runtime::Frame': 0,
    'runtime::License': 0,
    'runtime::Log': 0,
    'runtime::McpPriority': 0,
    'runtime::RequestBodyObject': 0,
    'runtime::User$login$args': 0,
    'runtime::LogLevel': 0,
    'runtime::mcp_tools_call$args': 0,
    'runtime::Debug$all$args': 0,
    'runtime::User': 0,
    'runtime::ResponseObject': 0,
    'runtime::SchemaObject': 0,
    'runtime::McpBaseMetadata': 0,
    'runtime::McpContentType': 0,
    'runtime::UserGroupPolicy': 0,
    'runtime::RuntimeInfo': 0,
    'runtime::UserCredential': 0,
    'runtime::YearlyPeriodicity': 0,
    'runtime::Scheduler$activate$args': 0,
    'runtime::ResponseCode': 0,
    'runtime::McpToolsListParams': 0,
    'runtime::InfoObject': 0,
    'runtime::TaskStatus': 0,
    'runtime::User$current$args': 0,
    'runtime::mcp_initialize$args': 0,
    'runtime::WeeklyPeriodicity': 0,
    'runtime::OpenApiV3': 0,
    'runtime::PeriodicOptions': 0,
    'runtime::DailyPeriodicity': 0,
    'runtime::OperationObject': 0,
    'runtime::Periodicity': 0,
    'runtime::SecurityEntity': 0,
    'runtime::Runtime$root$args': 0,
    'runtime::McpServerResourcesCapabilities': 0,
    'runtime::SecurityFields$get$args': 0,
    'runtime::Runtime': 0,
    'runtime::Task$running$args': 0,
    'runtime::OpenApiVersion': 0,
    'runtime::McpInitializeResult': 0,
    'runtime::User$permissions$args': 0,
    'runtime::User$renew$args': 0,
    'runtime::McpServerCapabilities': 0,
    'runtime::Runtime$info$args': 0,
    'runtime::Scheduler$add$args': 0,
    'runtime::McpToolsCallParams': 0,
    'runtime::User$tokenLogin$args': 0,
    'runtime::Scheduler$find$args': 0,
    'runtime::System': 0,
    'runtime::LicenseType': 0,
    'runtime::SecurityEntity$set$args': 0,
    'runtime::Scheduler': 0,
    'runtime::Role$all$args': 0,
    'runtime::Permission$all$args': 0,
    'runtime::LogDataUsage': 0,
    'runtime::OpenApi': 0,
    'runtime::ComponentsObject': 0,
    'runtime::UserGroupPolicyType': 0,
    'runtime::DateTuple': 0,
    'runtime::PeriodicTask': 0,
    'runtime::McpServerPromptsCapabilities': 0,
    'runtime::McpToolsListResult': 0,
    'runtime::McpTool': 0,
    'runtime::Role': 0,
    'runtime::McpClientCapabilities': 0,
    'runtime::Debug$resume$args': 0,
    'runtime::OpenIDConnect$config$args': 0,
    'runtime::DayOfWeek': 0,
    'runtime::Runtime$abi$args': 0,
    'runtime::Task$is_running$args': 0,
    'runtime::McpClientRoots': 0,
    'runtime::HeaderObject': 0,
    'runtime::ChildProcess': 0,
    'runtime::McpRequestParams': 0,
    'runtime::OpenApi$v3$args': 0,
    'runtime::Variable': 0,
    'io::CsvWriter': 0,
    'io::Http': 0,
    'io::CsvAnalysisConfig': 0,
    'io::HttpResponse<core::Array<importer::JsonStation>>': 0,
    'io::CsvFormat': 0,
    'io::FileWalker': 0,
    'io::CsvSharding': 0,
    'io::Reader<core::String>': 0,
    'io::Http<core::Array<importer::JsonStation>>': 0,
    'io::Json': 0,
    'io::Smtp': 0,
    'io::SmtpMode': 0,
    'io::Csv$sample$args': 0,
    'io::TextWriter': 0,
    'io::HttpRequest': 0,
    'io::Reader<importer::InternalContractDTO>': 0,
    'io::Csv$analyze$args': 0,
    'io::SmtpAuth': 0,
    'io::CsvStatistics': 0,
    'io::TextReader': 0,
    'io::GcbReader': 0,
    'io::Http<core::Array<importer::JsonContract>>': 0,
    'io::CsvReader<importer::InternalRecordsDTO>': 0,
    'io::CsvColumnStatistics': 0,
    'io::HttpMethod': 0,
    'io::BinReader': 0,
    'io::Email': 0,
    'io::Writer<importer::InternalRecordsDTO>': 0,
    'io::JsonReader<importer::InternalContractDTO>': 0,
    'io::CsvWriter<importer::InternalRecordsDTO>': 0,
    'io::GcbWriter': 0,
    'io::XmlReader': 0,
    'io::Csv$generate$args': 0,
    'io::HttpResponse': 0,
    'io::JsonReader': 0,
    'io::File': 0,
    'io::JsonWriter': 0,
    'io::Reader': 0,
    'io::Csv': 0,
    'io::CsvReader': 0,
    'io::Writer': 0,
    'io::Url': 0,
    'io::Reader<importer::InternalRecordsDTO>': 0,
    'io::HttpResponse<core::Array<importer::JsonContract>>': 0,
    'util::Random': 0,
    'util::Quantizer<core::int>': 0,
    'util::Histogram': 0,
    'util::MultiQuantizer': 0,
    'util::Assert': 0,
    'util::ProgressTracker': 0,
    'util::GaussianProfileSlot': 0,
    'util::TimeWindow': 0,
    'util::Gaussian': 0,
    'util::LinearQuantizer': 0,
    'util::QuantizerSlotBound<core::Array<core::int>>': 0,
    'util::Crypto': 0,
    'util::SlidingWindow': 0,
    'util::Queue': 0,
    'util::Quantizer<core::Array<core::int>>': 0,
    'util::GaussianProfile<core::Array<core::int>>': 0,
    'util::Plot': 0,
    'util::HistogramStats': 0,
    'util::CustomQuantizer': 0,
    'util::QuantizerSlotBound': 0,
    'util::LinearQuantizer<core::int>': 0,
    'util::Stack': 0,
    'util::Quantizer<core::Array>': 0,
    'util::MultiQuantizer<core::int>': 0,
    'util::QuantizerSlotBound<core::Array>': 0,
    'util::Quantizer': 0,
    'util::HistogramBin': 0,
    'util::GaussianProfile': 0,
    'util::QuantizerSlotBound<core::int>': 0,
    'util::LogQuantizer': 0,
    'project::Root': 0,
    'model::StationProfile': 0,
    'model::Station': 0,
    'model::StationDetail': 0,
    'model::Contract': 0,
    'model::StationStatus': 0,
    'model::StationRecord': 0,
    'importer::InternalStationDTO': 0,
    'importer::InternalRecordsDTO': 0,
    'importer::JsonStation': 0,
    'importer::JsonContract': 0,
    'importer::InternalContractDTO': 0,
    'api::getStations$args': 0,
    'api::StationView': 0,
    'api::StationItemView': 0,
    'api::getStationProfile$args': 0,
    'api::getStationTimeSeries$args': 0,
  }

  interface $FieldsMap {
    'core::GeoBox::sw': 0,
    'core::GeoBox::ne': 0,
    'core::VectorVertex::vector': 0,
    'core::VectorVertex::level_sizes': 0,
    'core::VectorVertex::neighbour_nodes': 0,
    'core::nodeGeo$sample$args::refs': 0,
    'core::nodeGeo$sample$args::from': 0,
    'core::nodeGeo$sample$args::to': 0,
    'core::nodeGeo$sample$args::maxRows': 0,
    'core::nodeGeo$sample$args::mode': 0,
    'core::GeoCircle::center': 0,
    'core::GeoCircle::radius': 0,
    'core::nodeGeo$info$args::nodes': 0,
    'core::TableColumnMapping::column': 0,
    'core::TableColumnMapping::extractors': 0,
    'core::nodeTime$sample$args::refs': 0,
    'core::nodeTime$sample$args::from': 0,
    'core::nodeTime$sample$args::to': 0,
    'core::nodeTime$sample$args::maxRows': 0,
    'core::nodeTime$sample$args::mode': 0,
    'core::nodeTime$sample$args::maxDephasing': 0,
    'core::nodeTime$sample$args::tz': 0,
    'core::Date::year': 0,
    'core::Date::month': 0,
    'core::Date::day': 0,
    'core::Date::hour': 0,
    'core::Date::minute': 0,
    'core::Date::second': 0,
    'core::Date::microsecond': 0,
    'core::SearchResult::key': 0,
    'core::SearchResult::value': 0,
    'core::SearchResult::distance': 0,
    'core::nodeTime$info$args::nodes': 0,
    'core::NodeInfo::size': 0,
    'core::NodeInfo::from': 0,
    'core::NodeInfo::to': 0,
    'core::node$resolve_all$args::n': 0,
    'core::VectorIndex::values': 0,
    'core::VectorIndex::count': 0,
    'core::VectorIndex::max_level': 0,
    'core::VectorIndex::entry_node_ref': 0,
    'core::VectorIndex::rng': 0,
    'core::VectorIndex::distance': 0,
    'core::nodeList$sample$args::refs': 0,
    'core::nodeList$sample$args::from': 0,
    'core::nodeList$sample$args::to': 0,
    'core::nodeList$sample$args::maxRows': 0,
    'core::nodeList$sample$args::mode': 0,
    'core::nodeList$sample$args::maxDephasing': 0,
    'core::nodeIndexBucket::key': 0,
    'core::nodeIndexBucket::value': 0,
    'core::nodeIndexBucket::next': 0,
    'core::nodeList$info$args::nodes': 0,
    'core::nodeIndex$info$args::nodes': 0,
    'core::nodeIndex$sample$args::refs': 0,
    'core::nodeIndex$sample$args::from': 0,
    'core::nodeIndex$sample$args::maxRows': 0,
    'core::nodeIndex$sample$args::mode': 0,
    'core::Table$applyMappings$args::table': 0,
    'core::Table$applyMappings$args::mappings': 0,
    'core::nodeIndex$search_closest$args::i': 0,
    'core::nodeIndex$search_closest$args::key': 0,
    'core::nodeIndex$search_closest$args::max': 0,
    'core::Error::message': 0,
    'core::Error::stack': 0,
    'core::GeoPoly::points': 0,
    'core::Tuple::x': 0,
    'core::Tuple::y': 0,
    'core::nodeTimeCursor::n': 0,
    'core::nodeTimeCursor::req_time': 0,
    'core::ErrorFrame::module': 0,
    'core::ErrorFrame::function': 0,
    'core::ErrorFrame::line': 0,
    'core::ErrorFrame::column': 0,
    'runtime::Task::user_id': 0,
    'runtime::Task::task_id': 0,
    'runtime::Task::mod': 0,
    'runtime::Task::type': 0,
    'runtime::Task::fun': 0,
    'runtime::Task::creation': 0,
    'runtime::Task::start': 0,
    'runtime::Task::duration': 0,
    'runtime::Task::status': 0,
    'runtime::Task::progress': 0,
    'runtime::SecurityFields::email': 0,
    'runtime::SecurityFields::name': 0,
    'runtime::SecurityFields::first_name': 0,
    'runtime::SecurityFields::last_name': 0,
    'runtime::SecurityFields::roles': 0,
    'runtime::SecurityFields::groups': 0,
    'runtime::OpenIDConnect::url': 0,
    'runtime::OpenIDConnect::clientId': 0,
    'runtime::McpAnnotations::audience': 0,
    'runtime::McpAnnotations::priority': 0,
    'runtime::McpAnnotations::lastModified': 0,
    'runtime::Debug::id': 0,
    'runtime::Debug::frames': 0,
    'runtime::Debug::root': 0,
    'runtime::MonthlyPeriodicity::days': 0,
    'runtime::MonthlyPeriodicity::daily': 0,
    'runtime::ChildProcessResult::code': 0,
    'runtime::ChildProcessResult::stdout': 0,
    'runtime::ChildProcessResult::stderr': 0,
    'runtime::McpResourceContent::type': 0,
    'runtime::McpResourceContent::_meta': 0,
    'runtime::McpResourceContent::annotations': 0,
    'runtime::McpResourceContent::uri': 0,
    'runtime::McpResourceContent::description': 0,
    'runtime::McpResourceContent::mimeType': 0,
    'runtime::McpResourceContent::size': 0,
    'runtime::Job::function': 0,
    'runtime::Job::arguments': 0,
    'runtime::Debug$get$args::id': 0,
    'runtime::UserGroup::id': 0,
    'runtime::UserGroup::name': 0,
    'runtime::UserGroup::activated': 0,
    'runtime::McpImplementation::name': 0,
    'runtime::McpImplementation::title': 0,
    'runtime::McpImplementation::version': 0,
    'runtime::McpImageContent::type': 0,
    'runtime::McpImageContent::_meta': 0,
    'runtime::McpImageContent::annotations': 0,
    'runtime::McpImageContent::data': 0,
    'runtime::McpImageContent::mimeType': 0,
    'runtime::User$setPassword$args::name': 0,
    'runtime::User$setPassword$args::pass': 0,
    'runtime::McpServerToolsCapabilities::listChanged': 0,
    'runtime::Task$cancel$args::task_id': 0,
    'runtime::McpTextContent::type': 0,
    'runtime::McpTextContent::_meta': 0,
    'runtime::McpTextContent::annotations': 0,
    'runtime::McpTextContent::text': 0,
    'runtime::Permission::name': 0,
    'runtime::Permission::description': 0,
    'runtime::Task$history$args::offset': 0,
    'runtime::Task$history$args::max': 0,
    'runtime::PathItemObject::description': 0,
    'runtime::PathItemObject::post': 0,
    'runtime::McpToolsCallResult::_meta': 0,
    'runtime::McpToolsCallResult::content': 0,
    'runtime::McpToolsCallResult::structuredContent': 0,
    'runtime::McpToolsCallResult::isError': 0,
    'runtime::SecurityPolicy::entities': 0,
    'runtime::SecurityPolicy::credentials': 0,
    'runtime::SecurityPolicy::fields': 0,
    'runtime::SecurityPolicy::keys': 0,
    'runtime::SecurityPolicy::keys_last_refresh': 0,
    'runtime::SecurityFields$set$args::f': 0,
    'runtime::Scheduler$deactivate$args::function': 0,
    'runtime::FixedPeriodicity::every': 0,
    'runtime::McpAudioContent::type': 0,
    'runtime::McpAudioContent::_meta': 0,
    'runtime::McpAudioContent::annotations': 0,
    'runtime::McpAudioContent::data': 0,
    'runtime::McpAudioContent::mimeType': 0,
    'runtime::MediaTypeObject::schema': 0,
    'runtime::McpInitializeParams::_meta': 0,
    'runtime::McpInitializeParams::protocolVersion': 0,
    'runtime::McpInitializeParams::capabilities': 0,
    'runtime::McpInitializeParams::clientInfo': 0,
    'runtime::mcp_tools_list$args::params': 0,
    'runtime::Frame::module': 0,
    'runtime::Frame::type': 0,
    'runtime::Frame::function': 0,
    'runtime::Frame::src': 0,
    'runtime::Frame::line': 0,
    'runtime::Frame::column': 0,
    'runtime::Frame::scope': 0,
    'runtime::License::name': 0,
    'runtime::License::start': 0,
    'runtime::License::end': 0,
    'runtime::License::company': 0,
    'runtime::License::max_memory': 0,
    'runtime::License::extra_1': 0,
    'runtime::License::extra_2': 0,
    'runtime::License::type': 0,
    'runtime::Log::level': 0,
    'runtime::Log::time': 0,
    'runtime::Log::user_id': 0,
    'runtime::Log::id': 0,
    'runtime::Log::id2': 0,
    'runtime::Log::src': 0,
    'runtime::Log::data': 0,
    'runtime::RequestBodyObject::content': 0,
    'runtime::RequestBodyObject::required': 0,
    'runtime::User$login$args::credentials': 0,
    'runtime::User$login$args::use_cookie': 0,
    'runtime::mcp_tools_call$args::params': 0,
    'runtime::User::id': 0,
    'runtime::User::name': 0,
    'runtime::User::activated': 0,
    'runtime::User::full_name': 0,
    'runtime::User::email': 0,
    'runtime::User::role': 0,
    'runtime::User::groups': 0,
    'runtime::User::groups_flags': 0,
    'runtime::User::external': 0,
    'runtime::ResponseObject::description': 0,
    'runtime::ResponseObject::headers': 0,
    'runtime::ResponseObject::content': 0,
    'runtime::SchemaObject::$ref': 0,
    'runtime::SchemaObject::$defs': 0,
    'runtime::SchemaObject::type': 0,
    'runtime::SchemaObject::format': 0,
    'runtime::SchemaObject::nullable': 0,
    'runtime::SchemaObject::properties': 0,
    'runtime::SchemaObject::required': 0,
    'runtime::SchemaObject::items': 0,
    'runtime::SchemaObject::oneOf': 0,
    'runtime::SchemaObject::allOf': 0,
    'runtime::SchemaObject::anyOf': 0,
    'runtime::SchemaObject::minItems': 0,
    'runtime::SchemaObject::maxItems': 0,
    'runtime::SchemaObject::enum': 0,
    'runtime::SchemaObject::additionalProperties': 0,
    'runtime::UserGroupPolicy::group_id': 0,
    'runtime::UserGroupPolicy::type': 0,
    'runtime::RuntimeInfo::version': 0,
    'runtime::RuntimeInfo::program_version': 0,
    'runtime::RuntimeInfo::arch': 0,
    'runtime::RuntimeInfo::timezone': 0,
    'runtime::RuntimeInfo::license': 0,
    'runtime::RuntimeInfo::io_threads': 0,
    'runtime::RuntimeInfo::bg_threads': 0,
    'runtime::RuntimeInfo::fg_threads': 0,
    'runtime::RuntimeInfo::mem_total': 0,
    'runtime::RuntimeInfo::mem_worker': 0,
    'runtime::RuntimeInfo::disk_data_bytes': 0,
    'runtime::UserCredential::offset': 0,
    'runtime::UserCredential::pass': 0,
    'runtime::YearlyPeriodicity::dates': 0,
    'runtime::YearlyPeriodicity::timezone': 0,
    'runtime::Scheduler$activate$args::function': 0,
    'runtime::McpToolsListParams::_meta': 0,
    'runtime::McpToolsListParams::cursor': 0,
    'runtime::InfoObject::title': 0,
    'runtime::InfoObject::version': 0,
    'runtime::mcp_initialize$args::params': 0,
    'runtime::WeeklyPeriodicity::days': 0,
    'runtime::WeeklyPeriodicity::daily': 0,
    'runtime::OpenApiV3::openapi': 0,
    'runtime::OpenApiV3::info': 0,
    'runtime::OpenApiV3::paths': 0,
    'runtime::OpenApiV3::components': 0,
    'runtime::PeriodicOptions::activated': 0,
    'runtime::PeriodicOptions::start': 0,
    'runtime::PeriodicOptions::max_duration': 0,
    'runtime::DailyPeriodicity::hour': 0,
    'runtime::DailyPeriodicity::minute': 0,
    'runtime::DailyPeriodicity::second': 0,
    'runtime::DailyPeriodicity::timezone': 0,
    'runtime::OperationObject::tags': 0,
    'runtime::OperationObject::description': 0,
    'runtime::OperationObject::requestBody': 0,
    'runtime::OperationObject::responses': 0,
    'runtime::McpServerResourcesCapabilities::subscribe': 0,
    'runtime::McpServerResourcesCapabilities::listChanged': 0,
    'runtime::McpInitializeResult::_meta': 0,
    'runtime::McpInitializeResult::protocolVersion': 0,
    'runtime::McpInitializeResult::capabilities': 0,
    'runtime::McpInitializeResult::serverInfo': 0,
    'runtime::McpInitializeResult::instructions': 0,
    'runtime::User$renew$args::use_cookie': 0,
    'runtime::McpServerCapabilities::experimental': 0,
    'runtime::McpServerCapabilities::logging': 0,
    'runtime::McpServerCapabilities::completions': 0,
    'runtime::McpServerCapabilities::prompts': 0,
    'runtime::McpServerCapabilities::resources': 0,
    'runtime::McpServerCapabilities::tools': 0,
    'runtime::Scheduler$add$args::function': 0,
    'runtime::Scheduler$add$args::periodicity': 0,
    'runtime::Scheduler$add$args::options': 0,
    'runtime::McpToolsCallParams::_meta': 0,
    'runtime::McpToolsCallParams::name': 0,
    'runtime::McpToolsCallParams::arguments': 0,
    'runtime::User$tokenLogin$args::token': 0,
    'runtime::User$tokenLogin$args::use_cookie': 0,
    'runtime::Scheduler$find$args::function': 0,
    'runtime::SecurityEntity$set$args::entity': 0,
    'runtime::LogDataUsage::read_bytes': 0,
    'runtime::LogDataUsage::read_hits': 0,
    'runtime::LogDataUsage::read_wasted': 0,
    'runtime::LogDataUsage::write_bytes': 0,
    'runtime::LogDataUsage::write_hits': 0,
    'runtime::LogDataUsage::cache_bytes': 0,
    'runtime::LogDataUsage::cache_hits': 0,
    'runtime::ComponentsObject::schemas': 0,
    'runtime::DateTuple::day': 0,
    'runtime::DateTuple::month': 0,
    'runtime::PeriodicTask::function': 0,
    'runtime::PeriodicTask::periodicity': 0,
    'runtime::PeriodicTask::options': 0,
    'runtime::PeriodicTask::is_active': 0,
    'runtime::PeriodicTask::next_execution': 0,
    'runtime::PeriodicTask::execution_count': 0,
    'runtime::McpServerPromptsCapabilities::listChanged': 0,
    'runtime::McpToolsListResult::_meta': 0,
    'runtime::McpToolsListResult::tools': 0,
    'runtime::McpTool::name': 0,
    'runtime::McpTool::title': 0,
    'runtime::McpTool::description': 0,
    'runtime::McpTool::inputSchema': 0,
    'runtime::McpTool::outputSchema': 0,
    'runtime::McpTool::annotations': 0,
    'runtime::Role::name': 0,
    'runtime::Role::permissions': 0,
    'runtime::McpClientCapabilities::experimental': 0,
    'runtime::McpClientCapabilities::roots': 0,
    'runtime::McpClientCapabilities::sampling': 0,
    'runtime::McpClientCapabilities::elicitation': 0,
    'runtime::Debug$resume$args::id': 0,
    'runtime::Task$is_running$args::task_id': 0,
    'runtime::McpClientRoots::listChanged': 0,
    'runtime::HeaderObject::description': 0,
    'runtime::HeaderObject::required': 0,
    'runtime::ChildProcess::pid': 0,
    'runtime::Variable::name': 0,
    'runtime::Variable::value': 0,
    'io::CsvWriter::path': 0,
    'io::CsvWriter::append': 0,
    'io::CsvWriter::format': 0,
    'io::CsvAnalysisConfig::header_lines': 0,
    'io::CsvAnalysisConfig::separator': 0,
    'io::CsvAnalysisConfig::string_delimiter': 0,
    'io::CsvAnalysisConfig::decimal_separator': 0,
    'io::CsvAnalysisConfig::thousands_separator': 0,
    'io::CsvAnalysisConfig::row_limit': 0,
    'io::CsvAnalysisConfig::enumerable_limit': 0,
    'io::CsvAnalysisConfig::date_check_limit': 0,
    'io::CsvAnalysisConfig::date_formats': 0,
    'io::CsvFormat::header_lines': 0,
    'io::CsvFormat::separator': 0,
    'io::CsvFormat::string_delimiter': 0,
    'io::CsvFormat::decimal_separator': 0,
    'io::CsvFormat::thousands_separator': 0,
    'io::CsvFormat::trim': 0,
    'io::CsvFormat::format': 0,
    'io::CsvFormat::tz': 0,
    'io::CsvFormat::strict': 0,
    'io::CsvFormat::nearest_time': 0,
    'io::FileWalker::path': 0,
    'io::CsvSharding::id': 0,
    'io::CsvSharding::column': 0,
    'io::CsvSharding::modulo': 0,
    'io::Smtp::host': 0,
    'io::Smtp::port': 0,
    'io::Smtp::mode': 0,
    'io::Smtp::authenticate': 0,
    'io::Smtp::user': 0,
    'io::Smtp::pass': 0,
    'io::Csv$sample$args::reader': 0,
    'io::Csv$sample$args::max_lines': 0,
    'io::TextWriter::path': 0,
    'io::TextWriter::append': 0,
    'io::HttpRequest::method': 0,
    'io::HttpRequest::url': 0,
    'io::HttpRequest::headers': 0,
    'io::HttpRequest::body': 0,
    'io::Csv$analyze$args::files': 0,
    'io::Csv$analyze$args::config': 0,
    'io::CsvStatistics::header_lines': 0,
    'io::CsvStatistics::separator': 0,
    'io::CsvStatistics::string_delimiter': 0,
    'io::CsvStatistics::decimal_separator': 0,
    'io::CsvStatistics::thousands_separator': 0,
    'io::CsvStatistics::columns': 0,
    'io::CsvStatistics::line_count': 0,
    'io::CsvStatistics::fail_count': 0,
    'io::CsvStatistics::file_count': 0,
    'io::TextReader::path': 0,
    'io::TextReader::pos': 0,
    'io::GcbReader::path': 0,
    'io::GcbReader::pos': 0,
    'io::CsvColumnStatistics::name': 0,
    'io::CsvColumnStatistics::example': 0,
    'io::CsvColumnStatistics::null_count': 0,
    'io::CsvColumnStatistics::bool_count': 0,
    'io::CsvColumnStatistics::int_count': 0,
    'io::CsvColumnStatistics::float_count': 0,
    'io::CsvColumnStatistics::string_count': 0,
    'io::CsvColumnStatistics::date_count': 0,
    'io::CsvColumnStatistics::date_format_count': 0,
    'io::CsvColumnStatistics::enumerable_count': 0,
    'io::CsvColumnStatistics::profile': 0,
    'io::BinReader::path': 0,
    'io::BinReader::pos': 0,
    'io::Email::from': 0,
    'io::Email::subject': 0,
    'io::Email::body': 0,
    'io::Email::body_is_html': 0,
    'io::Email::to': 0,
    'io::Email::cc': 0,
    'io::Email::bcc': 0,
    'io::GcbWriter::path': 0,
    'io::GcbWriter::append': 0,
    'io::XmlReader::path': 0,
    'io::XmlReader::pos': 0,
    'io::Csv$generate$args::stats': 0,
    'io::HttpResponse::status_code': 0,
    'io::HttpResponse::headers': 0,
    'io::HttpResponse::content': 0,
    'io::HttpResponse::error_msg': 0,
    'io::JsonReader::path': 0,
    'io::JsonReader::pos': 0,
    'io::File::path': 0,
    'io::File::size': 0,
    'io::File::last_modification': 0,
    'io::JsonWriter::path': 0,
    'io::JsonWriter::append': 0,
    'io::Reader::path': 0,
    'io::Reader::pos': 0,
    'io::CsvReader::path': 0,
    'io::CsvReader::pos': 0,
    'io::CsvReader::format': 0,
    'io::CsvReader::sharding': 0,
    'io::Writer::path': 0,
    'io::Writer::append': 0,
    'io::Url::protocol': 0,
    'io::Url::host': 0,
    'io::Url::port': 0,
    'io::Url::path': 0,
    'io::Url::params': 0,
    'io::Url::hash': 0,
    'util::Random::seed': 0,
    'util::Random::v': 0,
    'util::Histogram::quantizer': 0,
    'util::Histogram::bins': 0,
    'util::Histogram::nb_rejected': 0,
    'util::Histogram::nb_accepted': 0,
    'util::Histogram::min': 0,
    'util::Histogram::max': 0,
    'util::Histogram::sum': 0,
    'util::Histogram::sumsq': 0,
    'util::MultiQuantizer::quantizers': 0,
    'util::ProgressTracker::start': 0,
    'util::ProgressTracker::total': 0,
    'util::ProgressTracker::counter': 0,
    'util::ProgressTracker::duration': 0,
    'util::ProgressTracker::progress': 0,
    'util::ProgressTracker::speed': 0,
    'util::ProgressTracker::remaining': 0,
    'util::GaussianProfileSlot::sum': 0,
    'util::GaussianProfileSlot::sumsq': 0,
    'util::GaussianProfileSlot::count': 0,
    'util::TimeWindow::values': 0,
    'util::TimeWindow::span': 0,
    'util::TimeWindow::sum': 0,
    'util::TimeWindow::sumsq': 0,
    'util::TimeWindow::field': 0,
    'util::Gaussian::sum': 0,
    'util::Gaussian::sumsq': 0,
    'util::Gaussian::count': 0,
    'util::Gaussian::min': 0,
    'util::Gaussian::max': 0,
    'util::LinearQuantizer::min': 0,
    'util::LinearQuantizer::max': 0,
    'util::LinearQuantizer::bins': 0,
    'util::LinearQuantizer::open': 0,
    'util::SlidingWindow::values': 0,
    'util::SlidingWindow::span': 0,
    'util::SlidingWindow::sum': 0,
    'util::SlidingWindow::sumsq': 0,
    'util::SlidingWindow::field': 0,
    'util::Queue::values': 0,
    'util::Queue::capacity': 0,
    'util::HistogramStats::min': 0,
    'util::HistogramStats::max': 0,
    'util::HistogramStats::whisker_low': 0,
    'util::HistogramStats::whisker_high': 0,
    'util::HistogramStats::percentile1': 0,
    'util::HistogramStats::percentile5': 0,
    'util::HistogramStats::percentile10': 0,
    'util::HistogramStats::percentile20': 0,
    'util::HistogramStats::percentile25': 0,
    'util::HistogramStats::percentile50': 0,
    'util::HistogramStats::percentile75': 0,
    'util::HistogramStats::percentile80': 0,
    'util::HistogramStats::percentile90': 0,
    'util::HistogramStats::percentile95': 0,
    'util::HistogramStats::percentile99': 0,
    'util::HistogramStats::sum': 0,
    'util::HistogramStats::avg': 0,
    'util::HistogramStats::std': 0,
    'util::HistogramStats::size': 0,
    'util::CustomQuantizer::min': 0,
    'util::CustomQuantizer::max': 0,
    'util::CustomQuantizer::step_starts': 0,
    'util::CustomQuantizer::open': 0,
    'util::QuantizerSlotBound::min': 0,
    'util::QuantizerSlotBound::max': 0,
    'util::QuantizerSlotBound::center': 0,
    'util::Stack::values': 0,
    'util::HistogramBin::bin': 0,
    'util::HistogramBin::count': 0,
    'util::HistogramBin::ratio': 0,
    'util::HistogramBin::cumulative_count': 0,
    'util::HistogramBin::cumulative_ratio': 0,
    'util::GaussianProfile::quantizer': 0,
    'util::GaussianProfile::precision': 0,
    'util::GaussianProfile::bins': 0,
    'util::GaussianProfile::value_min': 0,
    'util::GaussianProfile::nb_rejected': 0,
    'util::LogQuantizer::min': 0,
    'util::LogQuantizer::max': 0,
    'util::LogQuantizer::bins': 0,
    'util::LogQuantizer::open': 0,
    'model::StationProfile::hourlyProfile': 0,
    'model::StationProfile::hourlyQuantizer': 0,
    'model::Station::number': 0,
    'model::Station::position': 0,
    'model::Station::detail': 0,
    'model::Station::records': 0,
    'model::Station::contract': 0,
    'model::Station::profile': 0,
    'model::StationDetail::name': 0,
    'model::StationDetail::address': 0,
    'model::StationDetail::banking': 0,
    'model::StationDetail::bonus': 0,
    'model::Contract::name': 0,
    'model::Contract::commercial_name': 0,
    'model::Contract::country_code': 0,
    'model::Contract::cities': 0,
    'model::Contract::stations': 0,
    'model::StationRecord::status': 0,
    'model::StationRecord::bike_stands': 0,
    'model::StationRecord::available_bike_stands': 0,
    'model::StationRecord::available_bikes': 0,
    'importer::InternalStationDTO::number': 0,
    'importer::InternalStationDTO::position': 0,
    'importer::InternalStationDTO::detail': 0,
    'importer::InternalRecordsDTO::time': 0,
    'importer::InternalRecordsDTO::status': 0,
    'importer::InternalRecordsDTO::availableBikes': 0,
    'importer::InternalRecordsDTO::availableBikeStands': 0,
    'importer::InternalRecordsDTO::bikeStands': 0,
    'importer::JsonStation::number': 0,
    'importer::JsonStation::contract_name': 0,
    'importer::JsonStation::name': 0,
    'importer::JsonStation::address': 0,
    'importer::JsonStation::position': 0,
    'importer::JsonStation::banking': 0,
    'importer::JsonStation::bonus': 0,
    'importer::JsonStation::bike_stands': 0,
    'importer::JsonStation::available_bike_stands': 0,
    'importer::JsonStation::available_bikes': 0,
    'importer::JsonStation::status': 0,
    'importer::JsonStation::last_update': 0,
    'importer::JsonContract::name': 0,
    'importer::JsonContract::commercial_name': 0,
    'importer::JsonContract::country_code': 0,
    'importer::JsonContract::cities': 0,
    'importer::InternalContractDTO::name': 0,
    'importer::InternalContractDTO::cities': 0,
    'importer::InternalContractDTO::commercial_name': 0,
    'importer::InternalContractDTO::country_code': 0,
    'importer::InternalContractDTO::stations': 0,
    'api::getStations$args::from': 0,
    'api::getStations$args::to': 0,
    'api::getStations$args::t': 0,
    'api::StationView::stations': 0,
    'api::StationView::minTime': 0,
    'api::StationView::maxTime': 0,
    'api::StationItemView::ref': 0,
    'api::StationItemView::coords': 0,
    'api::StationItemView::detail': 0,
    'api::StationItemView::record': 0,
    'api::StationItemView::last_update': 0,
    'api::getStationProfile$args::station': 0,
    'api::getStationTimeSeries$args::station': 0,
    'api::getStationTimeSeries$args::from': 0,
    'api::getStationTimeSeries$args::to': 0,
  }

  interface $FunctionsMap {
    'core::nodeList::info': 0,
    'core::nodeList::sample': 0,
    'core::node::resolve_all': 0,
    'core::Table::applyMappings': 0,
    'core::nodeGeo::info': 0,
    'core::nodeGeo::sample': 0,
    'core::nodeTime::info': 0,
    'core::nodeTime::sample': 0,
    'core::nodeIndex::search_closest': 0,
    'core::nodeIndex::info': 0,
    'core::nodeIndex::sample': 0,
    'runtime::mcp_initialize': 0,
    'runtime::mcp_tools_list': 0,
    'runtime::mcp_tools_call': 0,
    'runtime::Task::is_running': 0,
    'runtime::Task::cancel': 0,
    'runtime::Task::history': 0,
    'runtime::Task::running': 0,
    'runtime::SecurityFields::get': 0,
    'runtime::SecurityFields::set': 0,
    'runtime::OpenIDConnect::config': 0,
    'runtime::Debug::resume': 0,
    'runtime::Debug::get': 0,
    'runtime::Debug::all': 0,
    'runtime::Permission::all': 0,
    'runtime::User::setPassword': 0,
    'runtime::User::permissions': 0,
    'runtime::User::me': 0,
    'runtime::User::current': 0,
    'runtime::User::renew': 0,
    'runtime::User::logout': 0,
    'runtime::User::tokenLogin': 0,
    'runtime::User::login': 0,
    'runtime::SecurityEntity::set': 0,
    'runtime::SecurityEntity::all': 0,
    'runtime::Runtime::backup_full': 0,
    'runtime::Runtime::root': 0,
    'runtime::Runtime::abi': 0,
    'runtime::Runtime::info': 0,
    'runtime::Scheduler::deactivate': 0,
    'runtime::Scheduler::activate': 0,
    'runtime::Scheduler::find': 0,
    'runtime::Scheduler::list': 0,
    'runtime::Scheduler::add': 0,
    'runtime::OpenApi::v3': 0,
    'runtime::Role::all': 0,
    'io::Csv::sample': 0,
    'io::Csv::analyze': 0,
    'io::Csv::generate': 0,
    'api::getStations': 0,
    'api::getStationProfile': 0,
    'api::getStationTimeSeries': 0,
  }

  export import geo = gc.core.geo;
  export import t3 = gc.core.t3;
  export import float = gc.core.float;
  export import t4 = gc.core.t4;
  export import GeoBox = gc.core.GeoBox;
  export import t2 = gc.core.t2;
  export import String = gc.core.String;
  export import nodeList = gc.core.nodeList;
  export import field = gc.core.field;
  export import time = gc.core.time;
  export import Map = gc.core.Map;
  export import t4f = gc.core.t4f;
  export import TimeZone = gc.core.TimeZone;
  export import GeoCircle = gc.core.GeoCircle;
  export import null_ = gc.core.null_;
  export import node = gc.core.node;
  export import TableColumnMapping = gc.core.TableColumnMapping;
  export import TensorDistance = gc.core.TensorDistance;
  export import Table = gc.core.Table;
  export import str = gc.core.str;
  export import bool = gc.core.bool;
  export import duration = gc.core.duration;
  export import Array = gc.core.Array;
  export import char = gc.core.char;
  export import ErrorCode = gc.core.ErrorCode;
  export import Date = gc.core.Date;
  export import SearchResult = gc.core.SearchResult;
  export import function_ = gc.core.function_;
  export import nodeGeo = gc.core.nodeGeo;
  export import NodeInfo = gc.core.NodeInfo;
  export import CalendarUnit = gc.core.CalendarUnit;
  export import VectorIndex = gc.core.VectorIndex;
  export import t2f = gc.core.t2f;
  export import nodeTime = gc.core.nodeTime;
  export import FloatPrecision = gc.core.FloatPrecision;
  export import Tensor = gc.core.Tensor;
  export import TensorType = gc.core.TensorType;
  export import DurationUnit = gc.core.DurationUnit;
  export import SortOrder = gc.core.SortOrder;
  export import type = gc.core.type;
  export import SamplingMode = gc.core.SamplingMode;
  export import nodeIndex = gc.core.nodeIndex;
  export import Error = gc.core.Error;
  export import GeoPoly = gc.core.GeoPoly;
  export import Tuple = gc.core.Tuple;
  export import MathConstants = gc.core.MathConstants;
  export import nodeTimeCursor = gc.core.nodeTimeCursor;
  export import t3f = gc.core.t3f;
  export import int = gc.core.int;
  export import ErrorFrame = gc.core.ErrorFrame;
  export import Buffer = gc.core.Buffer;
  export import Task = gc.runtime.Task;
  export import SecurityFields = gc.runtime.SecurityFields;
  export import Month = gc.runtime.Month;
  export import OpenIDConnect = gc.runtime.OpenIDConnect;
  export import McpAnnotations = gc.runtime.McpAnnotations;
  export import MonthlyPeriodicity = gc.runtime.MonthlyPeriodicity;
  export import ChildProcessResult = gc.runtime.ChildProcessResult;
  export import McpResourceContent = gc.runtime.McpResourceContent;
  export import Job = gc.runtime.Job;
  export import UserGroup = gc.runtime.UserGroup;
  export import McpImplementation = gc.runtime.McpImplementation;
  export import McpContentBlock = gc.runtime.McpContentBlock;
  export import McpRole = gc.runtime.McpRole;
  export import McpImageContent = gc.runtime.McpImageContent;
  export import McpResult = gc.runtime.McpResult;
  export import McpServerToolsCapabilities = gc.runtime.McpServerToolsCapabilities;
  export import McpTextContent = gc.runtime.McpTextContent;
  export import McpToolsCallResult = gc.runtime.McpToolsCallResult;
  export import SecurityPolicy = gc.runtime.SecurityPolicy;
  export import FixedPeriodicity = gc.runtime.FixedPeriodicity;
  export import MergeStrategy = gc.runtime.MergeStrategy;
  export import McpAudioContent = gc.runtime.McpAudioContent;
  export import McpInitializeParams = gc.runtime.McpInitializeParams;
  export import License = gc.runtime.License;
  export import Log = gc.runtime.Log;
  export import McpPriority = gc.runtime.McpPriority;
  export import LogLevel = gc.runtime.LogLevel;
  export import User = gc.runtime.User;
  export import McpBaseMetadata = gc.runtime.McpBaseMetadata;
  export import McpContentType = gc.runtime.McpContentType;
  export import UserGroupPolicy = gc.runtime.UserGroupPolicy;
  export import RuntimeInfo = gc.runtime.RuntimeInfo;
  export import YearlyPeriodicity = gc.runtime.YearlyPeriodicity;
  export import McpToolsListParams = gc.runtime.McpToolsListParams;
  export import TaskStatus = gc.runtime.TaskStatus;
  export import WeeklyPeriodicity = gc.runtime.WeeklyPeriodicity;
  export import PeriodicOptions = gc.runtime.PeriodicOptions;
  export import DailyPeriodicity = gc.runtime.DailyPeriodicity;
  export import Periodicity = gc.runtime.Periodicity;
  export import SecurityEntity = gc.runtime.SecurityEntity;
  export import McpServerResourcesCapabilities = gc.runtime.McpServerResourcesCapabilities;
  export import Runtime = gc.runtime.Runtime;
  export import McpInitializeResult = gc.runtime.McpInitializeResult;
  export import McpServerCapabilities = gc.runtime.McpServerCapabilities;
  export import McpToolsCallParams = gc.runtime.McpToolsCallParams;
  export import System = gc.runtime.System;
  export import LicenseType = gc.runtime.LicenseType;
  export import Scheduler = gc.runtime.Scheduler;
  export import LogDataUsage = gc.runtime.LogDataUsage;
  export import OpenApi = gc.runtime.OpenApi;
  export import UserGroupPolicyType = gc.runtime.UserGroupPolicyType;
  export import DateTuple = gc.runtime.DateTuple;
  export import PeriodicTask = gc.runtime.PeriodicTask;
  export import McpServerPromptsCapabilities = gc.runtime.McpServerPromptsCapabilities;
  export import McpToolsListResult = gc.runtime.McpToolsListResult;
  export import McpTool = gc.runtime.McpTool;
  export import McpClientCapabilities = gc.runtime.McpClientCapabilities;
  export import DayOfWeek = gc.runtime.DayOfWeek;
  export import McpClientRoots = gc.runtime.McpClientRoots;
  export import ChildProcess = gc.runtime.ChildProcess;
  export import McpRequestParams = gc.runtime.McpRequestParams;
  export import CsvWriter = gc.io.CsvWriter;
  export import Http = gc.io.Http;
  export import CsvAnalysisConfig = gc.io.CsvAnalysisConfig;
  export import CsvFormat = gc.io.CsvFormat;
  export import FileWalker = gc.io.FileWalker;
  export import CsvSharding = gc.io.CsvSharding;
  export import Json = gc.io.Json;
  export import Smtp = gc.io.Smtp;
  export import SmtpMode = gc.io.SmtpMode;
  export import TextWriter = gc.io.TextWriter;
  export import HttpRequest = gc.io.HttpRequest;
  export import SmtpAuth = gc.io.SmtpAuth;
  export import CsvStatistics = gc.io.CsvStatistics;
  export import TextReader = gc.io.TextReader;
  export import GcbReader = gc.io.GcbReader;
  export import CsvColumnStatistics = gc.io.CsvColumnStatistics;
  export import HttpMethod = gc.io.HttpMethod;
  export import BinReader = gc.io.BinReader;
  export import Email = gc.io.Email;
  export import GcbWriter = gc.io.GcbWriter;
  export import XmlReader = gc.io.XmlReader;
  export import HttpResponse = gc.io.HttpResponse;
  export import JsonReader = gc.io.JsonReader;
  export import File = gc.io.File;
  export import JsonWriter = gc.io.JsonWriter;
  export import Csv = gc.io.Csv;
  export import CsvReader = gc.io.CsvReader;
  export import Url = gc.io.Url;
  export import Random = gc.util.Random;
  export import Histogram = gc.util.Histogram;
  export import MultiQuantizer = gc.util.MultiQuantizer;
  export import Assert = gc.util.Assert;
  export import ProgressTracker = gc.util.ProgressTracker;
  export import GaussianProfileSlot = gc.util.GaussianProfileSlot;
  export import TimeWindow = gc.util.TimeWindow;
  export import Gaussian = gc.util.Gaussian;
  export import LinearQuantizer = gc.util.LinearQuantizer;
  export import Crypto = gc.util.Crypto;
  export import SlidingWindow = gc.util.SlidingWindow;
  export import Queue = gc.util.Queue;
  export import Plot = gc.util.Plot;
  export import HistogramStats = gc.util.HistogramStats;
  export import CustomQuantizer = gc.util.CustomQuantizer;
  export import QuantizerSlotBound = gc.util.QuantizerSlotBound;
  export import Stack = gc.util.Stack;
  export import HistogramBin = gc.util.HistogramBin;
  export import GaussianProfile = gc.util.GaussianProfile;
  export import LogQuantizer = gc.util.LogQuantizer;
  export import StationProfile = gc.model.StationProfile;
  export import Station = gc.model.Station;
  export import StationDetail = gc.model.StationDetail;
  export import Contract = gc.model.Contract;
  export import StationStatus = gc.model.StationStatus;
  export import StationRecord = gc.model.StationRecord;
  export import InternalStationDTO = gc.importer.InternalStationDTO;
  export import InternalRecordsDTO = gc.importer.InternalRecordsDTO;
  export import InternalContractDTO = gc.importer.InternalContractDTO;
  export import StationView = gc.api.StationView;
  export import StationItemView = gc.api.StationItemView;
  export import mcp_initialize = gc.runtime.mcp_initialize;
  export import mcp_tools_list = gc.runtime.mcp_tools_list;
  export import mcp_tools_call = gc.runtime.mcp_tools_call;
  export import getStations = gc.api.getStations;
  export import getStationProfile = gc.api.getStationProfile;
  export import getStationTimeSeries = gc.api.getStationTimeSeries;
}
