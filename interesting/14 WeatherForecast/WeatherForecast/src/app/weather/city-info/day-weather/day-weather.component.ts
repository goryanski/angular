import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {HourlyInfo} from "../../interfaces/hourlyInfo";
import {WeatherApiService} from "../../weather-api.service";

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DayWeatherComponent {
  constructor(
    private readonly weatherApiService: WeatherApiService
  ) {
  }
  @Input() item: HourlyInfo = {
    clouds: {},
    dt: 0,
    dt_txt: '',
    pop: 0,
    rain: {},
    sys: {},
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_kf: 0,
      temp_max: 0,
      temp_min: 0,
      proto: {}
    },
    visibility: 0,
    weather: [],
    proto: {},
    img: '',
    degrees: 0,
    date: '',
    description: '',
    dayName: '',
    active: false
  };
  @Input() index: number = 0;


  public onDayClick() {
    this.weatherApiService.changeActiveDay(this.index);
  }
}
