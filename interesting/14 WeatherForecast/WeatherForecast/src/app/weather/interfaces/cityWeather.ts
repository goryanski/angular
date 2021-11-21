import {HourlyInfo} from "./hourlyInfo";
import {CityInfo} from "./cityInfo";

export interface CityWeather {
  city: CityInfo;
  cnt: number;
  cod: number;
  list: Array<HourlyInfo>;
  message: number;
  proto: Object;
}
