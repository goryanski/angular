import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiService} from "../weather-api.service";
import {CityWeather} from "../interfaces/cityWeather";
import {Observable} from "rxjs";
import {DetailedHourWeatherInfo} from "../interfaces/detailedDayInfo";

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.component.html',
  styleUrls: ['./five-day-forecast.component.less']
})
export class FiveDayForecastComponent implements OnInit {
  // @ts-ignore
  public cityWeather$: Observable<CityWeather>;
  // @ts-ignore
  public currentDay$: Observable<DetailedHourWeatherInfo[]>;

  constructor(
    private readonly weatherApiService: WeatherApiService
  ) {}

  ngOnInit(): void {
    // подписываемся здесь на  BehaviorSubject из weatherApiService и инфо обновляется автоматически, когда меняем что-то в сервисе, а меняем что-то в сервисе через day-weather.component.ts
    this.cityWeather$ = this.weatherApiService.cityWeather;
    this.currentDay$ = this.weatherApiService.currentDay;
  }
}
