import {Geo} from "./geo";

export interface CityInfo {
  coord: Geo;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
  proto: Object;
}
