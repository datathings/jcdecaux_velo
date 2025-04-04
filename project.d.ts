// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
declare namespace gc {
  namespace project {
    class test$args extends gc.sdk.GCObject {
      static readonly _type = 'project::test$args';
      a: gc.core.geo;
      constructor(a: gc.core.geo);
      static createFrom(fields: {a: gc.core.geo}): test$args;
    }

    class Root extends gc.sdk.GCObject {
      static readonly _type = 'project::Root';
      "model::stations_by_geo": gc.core.nodeGeo<gc.core.node<gc.model.Station>>;
      "model::contracts_by_name": gc.core.nodeIndex<string, gc.core.node<gc.model.Contract>>;
      "importer::jcdeaux_key": gc.core.node<string | null>;
    }

    class startImportingScheduler$args extends gc.sdk.GCObject {
      static readonly _type = 'project::startImportingScheduler$args';
    }

    function startImportingScheduler($g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
    function test(a: gc.core.geo, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<unknown>;
  }

  namespace api {
    class getStationTimeSeries$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getStationTimeSeries$args';
      station: gc.core.node<gc.model.Station>;
      from: gc.core.time | null;
      to: gc.core.time | null;
      constructor(station: gc.core.node<gc.model.Station>, from?: gc.core.time | null, to?: gc.core.time | null);
      static createFrom(fields: {station: gc.core.node<gc.model.Station>, from?: gc.core.time | null, to?: gc.core.time | null}): getStationTimeSeries$args;
    }

    class getStations$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getStations$args';
      from: gc.core.geo;
      to: gc.core.geo;
      t: gc.core.time | null;
      constructor(from: gc.core.geo, to: gc.core.geo, t?: gc.core.time | null);
      static createFrom(fields: {from: gc.core.geo, to: gc.core.geo, t?: gc.core.time | null}): getStations$args;
    }

    class getStationProfile$args extends gc.sdk.GCObject {
      static readonly _type = 'api::getStationProfile$args';
      station: gc.core.node<gc.model.Station>;
      constructor(station: gc.core.node<gc.model.Station>);
      static createFrom(fields: {station: gc.core.node<gc.model.Station>}): getStationProfile$args;
    }

    class StationView extends gc.sdk.GCObject {
      static readonly _type = 'api::StationView';
      stations: globalThis.Array<gc.api.StationItemView>;
      minTime: gc.core.time | null;
      maxTime: gc.core.time | null;
      constructor(stations: globalThis.Array<gc.api.StationItemView>, minTime?: gc.core.time | null, maxTime?: gc.core.time | null);
      static createFrom(fields: {stations: globalThis.Array<gc.api.StationItemView>, minTime?: gc.core.time | null, maxTime?: gc.core.time | null}): StationView;
    }

    class StationItemView extends gc.sdk.GCObject {
      static readonly _type = 'api::StationItemView';
      ref: gc.core.node<gc.model.Station>;
      coords: gc.core.geo;
      detail: gc.model.StationDetail;
      record: gc.model.StationRecord | null;
      last_update: gc.core.time;
      constructor(ref: gc.core.node<gc.model.Station>, coords: gc.core.geo, detail: gc.model.StationDetail, record: gc.model.StationRecord | null, last_update: gc.core.time);
      static createFrom(fields: {ref: gc.core.node<gc.model.Station>, coords: gc.core.geo, detail: gc.model.StationDetail, record?: gc.model.StationRecord | null, last_update: gc.core.time}): StationItemView;
    }

    function getStations(from: gc.core.geo, to: gc.core.geo, t?: gc.core.time | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.api.StationView>;
    function getStationProfile(station: gc.core.node<gc.model.Station>, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.core.Table>;
    function getStationTimeSeries(station: gc.core.node<gc.model.Station>, from?: gc.core.time | null, to?: gc.core.time | null, $g?: gc.sdk.GreyCat, $signal?: globalThis.AbortSignal): Promise<gc.core.Table>;
  }

  namespace model {
    class StationDetail extends gc.sdk.GCObject {
      static readonly _type = 'model::StationDetail';
      name: string;
      address: string;
      banking: boolean;
      bonus: boolean;
      constructor(name: string, address: string, banking: boolean, bonus: boolean);
      static createFrom(fields: {name: string, address: string, banking: boolean, bonus: boolean}): StationDetail;
    }

    class Station extends gc.sdk.GCObject {
      static readonly _type = 'model::Station';
      number: number | bigint;
      position: gc.core.geo;
      detail: gc.core.node<gc.model.StationDetail>;
      records: gc.core.nodeTime<gc.model.StationRecord>;
      contract: gc.core.node<gc.model.Contract>;
      profile: gc.core.node<gc.model.StationProfile>;
      constructor(number: number | bigint, position: gc.core.geo, detail: gc.core.node<gc.model.StationDetail>, records: gc.core.nodeTime<gc.model.StationRecord>, contract: gc.core.node<gc.model.Contract>, profile: gc.core.node<gc.model.StationProfile>);
      static createFrom(fields: {number: number | bigint, position: gc.core.geo, detail: gc.core.node<gc.model.StationDetail>, records: gc.core.nodeTime<gc.model.StationRecord>, contract: gc.core.node<gc.model.Contract>, profile: gc.core.node<gc.model.StationProfile>}): Station;
    }

    class StationRecord extends gc.sdk.GCObject {
      static readonly _type = 'model::StationRecord';
      status: gc.model.StationStatus;
      bike_stands: number | bigint;
      available_bike_stands: number | bigint;
      available_bikes: number | bigint;
      constructor(status: gc.model.StationStatus, bike_stands: number | bigint, available_bike_stands: number | bigint, available_bikes: number | bigint);
      static createFrom(fields: {status: gc.model.StationStatus, bike_stands: number | bigint, available_bike_stands: number | bigint, available_bikes: number | bigint}): StationRecord;
    }

    class StationProfile extends gc.sdk.GCObject {
      static readonly _type = 'model::StationProfile';
      hourlyProfile: gc.util.GaussianProfile;
      hourlyQuantizer: gc.util.MultiQuantizer;
      constructor(hourlyProfile: gc.util.GaussianProfile, hourlyQuantizer: gc.util.MultiQuantizer);
      static createFrom(fields: {hourlyProfile: gc.util.GaussianProfile, hourlyQuantizer: gc.util.MultiQuantizer}): StationProfile;
    }

    class Contract extends gc.sdk.GCObject {
      static readonly _type = 'model::Contract';
      name: string;
      commercial_name: string | null;
      country_code: string | null;
      cities: globalThis.Array<string> | null;
      stations: gc.core.nodeIndex<number | bigint, gc.core.node<gc.model.Station>>;
      constructor(name: string, commercial_name: string | null, country_code: string | null, cities: globalThis.Array<string> | null, stations: gc.core.nodeIndex<number | bigint, gc.core.node<gc.model.Station>>);
      static createFrom(fields: {name: string, commercial_name?: string | null, country_code?: string | null, cities?: globalThis.Array<string> | null, stations: gc.core.nodeIndex<number | bigint, gc.core.node<gc.model.Station>>}): Contract;
    }

    class StationStatus extends gc.sdk.GCEnum {
      static readonly _type = 'model::StationStatus';
      static readonly $fields: StationStatus[];
      key: StationStatus.Field;
      constructor(type: gc.sdk.AbiType, offset: number, key: StationStatus.Field, value?: unknown);
      static open: StationStatus;
      static closed: StationStatus;
    }
    namespace StationStatus  {
      type Field = 'open'|'closed';
    }

  }

  namespace importer {
    class InternalContractDTO extends gc.sdk.GCObject {
      static readonly _type = 'importer::InternalContractDTO';
      name: string;
      cities: globalThis.Array<string> | null;
      commercial_name: string | null;
      country_code: string | null;
      stations: globalThis.Array<gc.importer.InternalStationDTO>;
      constructor(name: string, cities: globalThis.Array<string> | null, commercial_name: string | null, country_code: string | null, stations: globalThis.Array<gc.importer.InternalStationDTO>);
      static createFrom(fields: {name: string, cities?: globalThis.Array<string> | null, commercial_name?: string | null, country_code?: string | null, stations: globalThis.Array<gc.importer.InternalStationDTO>}): InternalContractDTO;
    }

    class InternalRecordsDTO extends gc.sdk.GCObject {
      static readonly _type = 'importer::InternalRecordsDTO';
      time: gc.core.time;
      status: gc.model.StationStatus;
      availableBikes: number | bigint;
      availableBikeStands: number | bigint;
      bikeStands: number | bigint;
      constructor(time: gc.core.time, status: gc.model.StationStatus, availableBikes: number | bigint, availableBikeStands: number | bigint, bikeStands: number | bigint);
      static createFrom(fields: {time: gc.core.time, status: gc.model.StationStatus, availableBikes: number | bigint, availableBikeStands: number | bigint, bikeStands: number | bigint}): InternalRecordsDTO;
    }

    class InternalStationDTO extends gc.sdk.GCObject {
      static readonly _type = 'importer::InternalStationDTO';
      number: number | bigint;
      position: gc.core.geo;
      detail: gc.model.StationDetail;
      constructor(number: number | bigint, position: gc.core.geo, detail: gc.model.StationDetail);
      static createFrom(fields: {number: number | bigint, position: gc.core.geo, detail: gc.model.StationDetail}): InternalStationDTO;
    }

  }

  namespace sdk {
    interface GreyCat {
        call(method: 'project::startImportingScheduler', args?: undefined, signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'project::startImportingScheduler', args?: undefined, signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'project::startImportingScheduler', args?: undefined, pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'project::test', args: [gc.core.geo], signal?: globalThis.AbortSignal): Promise<unknown>;
        spawn(method: 'project::test', args: [gc.core.geo], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'project::test', args: [gc.core.geo], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<unknown>;
        call(method: 'api::getStations', args: [gc.core.geo, gc.core.geo, gc.core.time | null], signal?: globalThis.AbortSignal): Promise<gc.api.StationView>;
        spawn(method: 'api::getStations', args: [gc.core.geo, gc.core.geo, gc.core.time | null], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getStations', args: [gc.core.geo, gc.core.geo, gc.core.time | null], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.api.StationView>;
        call(method: 'api::getStationProfile', args: [gc.core.node<gc.model.Station>], signal?: globalThis.AbortSignal): Promise<gc.core.Table>;
        spawn(method: 'api::getStationProfile', args: [gc.core.node<gc.model.Station>], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getStationProfile', args: [gc.core.node<gc.model.Station>], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.core.Table>;
        call(method: 'api::getStationTimeSeries', args: [gc.core.node<gc.model.Station>, gc.core.time | null, gc.core.time | null], signal?: globalThis.AbortSignal): Promise<gc.core.Table>;
        spawn(method: 'api::getStationTimeSeries', args: [gc.core.node<gc.model.Station>, gc.core.time | null, gc.core.time | null], signal?: globalThis.AbortSignal): Promise<gc.runtime.Task>;
        spawnAwait(method: 'api::getStationTimeSeries', args: [gc.core.node<gc.model.Station>, gc.core.time | null, gc.core.time | null], pollEvery?: number, signal?: globalThis.AbortSignal): Promise<gc.core.Table>;
    }
  }

  export import Date = gc.core.Date;
  export import nodeTimeCursor = gc.core.nodeTimeCursor;
  export import TimeZone = gc.core.TimeZone;
  export import SortOrder = gc.core.SortOrder;
  export import int = gc.core.int;
  export import FloatPrecision = gc.core.FloatPrecision;
  export import t3f = gc.core.t3f;
  export import Array = gc.core.Array;
  export import Tuple = gc.core.Tuple;
  export import String = gc.core.String;
  export import Map = gc.core.Map;
  export import field = gc.core.field;
  export import t2 = gc.core.t2;
  export import Tensor = gc.core.Tensor;
  export import NodeInfo = gc.core.NodeInfo;
  export import char = gc.core.char;
  export import t2f = gc.core.t2f;
  export import t4f = gc.core.t4f;
  export import type = gc.core.type;
  export import null_ = gc.core.null_;
  export import nodeIndex = gc.core.nodeIndex;
  export import Table = gc.core.Table;
  export import bool = gc.core.bool;
  export import Buffer = gc.core.Buffer;
  export import GeoBox = gc.core.GeoBox;
  export import DurationUnit = gc.core.DurationUnit;
  export import nodeTime = gc.core.nodeTime;
  export import nodeList = gc.core.nodeList;
  export import GeoCircle = gc.core.GeoCircle;
  export import Error = gc.core.Error;
  export import GeoPoly = gc.core.GeoPoly;
  export import ErrorFrame = gc.core.ErrorFrame;
  export import duration = gc.core.duration;
  export import t3 = gc.core.t3;
  export import geo = gc.core.geo;
  export import float = gc.core.float;
  export import MathConstants = gc.core.MathConstants;
  export import function_ = gc.core.function_;
  export import TableColumnMapping = gc.core.TableColumnMapping;
  export import time = gc.core.time;
  export import str = gc.core.str;
  export import t4 = gc.core.t4;
  export import TensorType = gc.core.TensorType;
  export import SamplingMode = gc.core.SamplingMode;
  export import CalendarUnit = gc.core.CalendarUnit;
  export import node = gc.core.node;
  export import nodeGeo = gc.core.nodeGeo;
  export import ErrorCode = gc.core.ErrorCode;
  export import OpenIDConnect = gc.runtime.OpenIDConnect;
  export import UserGroupPolicy = gc.runtime.UserGroupPolicy;
  export import System = gc.runtime.System;
  export import CallPerf = gc.runtime.CallPerf;
  export import TaskStatus = gc.runtime.TaskStatus;
  export import Log = gc.runtime.Log;
  export import SecurityEntity = gc.runtime.SecurityEntity;
  export import Task = gc.runtime.Task;
  export import StoreStat = gc.runtime.StoreStat;
  export import License = gc.runtime.License;
  export import RuntimeInfo = gc.runtime.RuntimeInfo;
  export import LogLevel = gc.runtime.LogLevel;
  export import UserGroup = gc.runtime.UserGroup;
  export import UserGroupPolicyType = gc.runtime.UserGroupPolicyType;
  export import User = gc.runtime.User;
  export import SecurityFields = gc.runtime.SecurityFields;
  export import SecurityPolicy = gc.runtime.SecurityPolicy;
  export import Job = gc.runtime.Job;
  export import Runtime = gc.runtime.Runtime;
  export import PeriodicTask = gc.runtime.PeriodicTask;
  export import LicenseType = gc.runtime.LicenseType;
  export import JsonWriter = gc.io.JsonWriter;
  export import Reader = gc.io.Reader;
  export import Smtp = gc.io.Smtp;
  export import JsonReader = gc.io.JsonReader;
  export import HttpHeader = gc.io.HttpHeader;
  export import SmtpAuth = gc.io.SmtpAuth;
  export import CsvFormat = gc.io.CsvFormat;
  export import CsvReader = gc.io.CsvReader;
  export import GcbWriter = gc.io.GcbWriter;
  export import CsvSharding = gc.io.CsvSharding;
  export import GcbReader = gc.io.GcbReader;
  export import CsvColumnStatistics = gc.io.CsvColumnStatistics;
  export import Csv = gc.io.Csv;
  export import CsvStatistics = gc.io.CsvStatistics;
  export import Email = gc.io.Email;
  export import Http = gc.io.Http;
  export import Writer = gc.io.Writer;
  export import CsvAnalysisConfig = gc.io.CsvAnalysisConfig;
  export import FileWalker = gc.io.FileWalker;
  export import Json = gc.io.Json;
  export import Url = gc.io.Url;
  export import TextWriter = gc.io.TextWriter;
  export import File = gc.io.File;
  export import TextReader = gc.io.TextReader;
  export import SmtpMode = gc.io.SmtpMode;
  export import CsvWriter = gc.io.CsvWriter;
  export import TimeWindow = gc.util.TimeWindow;
  export import Stack = gc.util.Stack;
  export import Random = gc.util.Random;
  export import Gaussian = gc.util.Gaussian;
  export import SlidingWindow = gc.util.SlidingWindow;
  export import LogQuantizer = gc.util.LogQuantizer;
  export import Plot = gc.util.Plot;
  export import HistogramStats = gc.util.HistogramStats;
  export import GaussianProfile = gc.util.GaussianProfile;
  export import Queue = gc.util.Queue;
  export import Quantizer = gc.util.Quantizer;
  export import Histogram = gc.util.Histogram;
  export import MultiQuantizer = gc.util.MultiQuantizer;
  export import Assert = gc.util.Assert;
  export import CustomQuantizer = gc.util.CustomQuantizer;
  export import GaussianProfileSlot = gc.util.GaussianProfileSlot;
  export import Crypto = gc.util.Crypto;
  export import LinearQuantizer = gc.util.LinearQuantizer;
  export import ProgressTracker = gc.util.ProgressTracker;
  export import QuantizerSlotBound = gc.util.QuantizerSlotBound;
  export import startImportingScheduler = gc.project.startImportingScheduler;
  export import test = gc.project.test;
  export import StationView = gc.api.StationView;
  export import StationItemView = gc.api.StationItemView;
  export import getStations = gc.api.getStations;
  export import getStationProfile = gc.api.getStationProfile;
  export import getStationTimeSeries = gc.api.getStationTimeSeries;
  export import StationDetail = gc.model.StationDetail;
  export import Station = gc.model.Station;
  export import StationRecord = gc.model.StationRecord;
  export import StationProfile = gc.model.StationProfile;
  export import Contract = gc.model.Contract;
  export import StationStatus = gc.model.StationStatus;
  export import InternalContractDTO = gc.importer.InternalContractDTO;
  export import InternalRecordsDTO = gc.importer.InternalRecordsDTO;
  export import InternalStationDTO = gc.importer.InternalStationDTO;
}
