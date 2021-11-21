import {Component, Input, OnInit} from '@angular/core';
import {DetailedHourWeatherInfo} from "../interfaces/detailedDayInfo";

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.less']
})
export class HourlyWeatherComponent implements OnInit {

  @Input() detaletDayWeather: DetailedHourWeatherInfo[] = [];
  constructor() { }

  ngOnInit(): void {

  }

}
