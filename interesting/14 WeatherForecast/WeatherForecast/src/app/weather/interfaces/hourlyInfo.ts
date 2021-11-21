import {TemperatureInfo} from "./temperatureInfo";
import {WeatherInfo} from "./weatherInfo";
import {WindInfo} from "./windInfo";

export interface HourlyInfo {
  clouds: Object;
  dt: number
  dt_txt: string;
  main: TemperatureInfo;
  pop: number;
  rain: Object;
  sys: Object;
  visibility: number;
  weather: Array<WeatherInfo>;
  wind?: WindInfo;
  proto: Object;
  img?: string;
  degrees?: number;
  date?: string;
  description?: string;
  dayName?: string;
  active?: boolean;
}
