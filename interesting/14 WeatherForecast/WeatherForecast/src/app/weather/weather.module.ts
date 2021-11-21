import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FiveDayForecastComponent } from './five-day-forecast/five-day-forecast.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SearchByCityComponent} from "./search-by-city/search-by-city.component";
import {WeatherApiService} from "./weather-api.service";
import {HttpClientModule} from "@angular/common/http";
import { CityNotFoundComponent } from './city-not-found/city-not-found.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { DayWeatherComponent } from './city-info/day-weather/day-weather.component';
import {TransformDataService} from "./transform-data.service";

@NgModule({
  declarations: [
    FiveDayForecastComponent,
    HourlyWeatherComponent,
    SearchByCityComponent,
    CityNotFoundComponent,
    CityInfoComponent,
    DayWeatherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherApiService,
    TransformDataService
  ],
  exports: [
    SearchByCityComponent,
    FiveDayForecastComponent,
    HourlyWeatherComponent
  ]
})
export class WeatherModule { }
