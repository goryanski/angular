import {Injectable} from "@angular/core";
import {AppEnvironment} from "../shared/app-environment.interface";
import {HttpClient} from "@angular/common/http";
import {map, publishReplay, refCount} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
import {CityWeather} from "./interfaces/cityWeather";
import {HourlyInfo} from "./interfaces/hourlyInfo";
import {DetailedHourWeatherInfo} from "./interfaces/detailedDayInfo";
import {TransformDataService} from "./transform-data.service";

export const cityWeatherInitialState: CityWeather = {
  city: {
    coord: {
      lat: 0,
      lon: 0,
      proto: {}
    },
    id: 0,
    country: '',
    name: '',
    population: 0,
    proto: {},
    sunrise: 0,
    sunset: 0,
    timezone: 0
  },
  cnt: 0,
  cod: 0,
  message: 0,
  proto: {},
  list: []
}
export const currentDayInitialState: DetailedHourWeatherInfo[] = []

@Injectable()
export class WeatherApiService {
  constructor(
    private readonly http: HttpClient,
    private readonly appEnv: AppEnvironment,
    private readonly transformDataService: TransformDataService
  ) {
  }

  public cityWeather: BehaviorSubject<CityWeather> = new BehaviorSubject<CityWeather>(cityWeatherInitialState);
  public currentDay: BehaviorSubject<DetailedHourWeatherInfo[]> = new BehaviorSubject<DetailedHourWeatherInfo[]>(currentDayInitialState);

  allDaysWeatherInfo: HourlyInfo[] = [];


  private getWeatherByCityName(cityName: string): Observable<CityWeather> {
    return this.http.get<CityWeather>(
      [
        this.appEnv.weatherApi.url,
        `forecast?q=${cityName}&units=metric&appid=${this.appEnv.weatherApi.key}`
      ].join('/')
    ).pipe(
      map(
        res => {
          //for hourly weather display by selected day (for today by default)
          this.currentDay.next(
            this.transformDataService.getCurrentDayWeather(res.list, res.list[0].dt_txt)
          );
          this.allDaysWeatherInfo = res.list;
          return {
            // unshift first day (today) to result days list
            ...res,
            list: [
              {
                // selected day (first by default)
                ...res.list[0],
                // fill additional fields for more convenience
                ...this.transformDataService.getImage(res.list[0]),
                ...this.transformDataService.getDegrees(res.list[0]),
                ...this.transformDataService.getDescription(res.list[0]),
                date: (new Date().toLocaleDateString()).substring(0, 5),
                // get weekday from date
                dayName: new Intl.DateTimeFormat('en-EN', {
                  weekday: 'long'
                }).format(new Date(res.list[0].dt_txt))
              },
              // transform all weather to list of 5 days weather (except today)
              ...this.transformDataService.getSeparateDaysWeather(res.list)
                .map((item, index) => {
                  return {
                    ...this.transformDataService.getImage(item),
                    ...this.transformDataService.getDegrees(item),
                    ...this.transformDataService.getDescription(item),
                    ...this.transformDataService.getDate(item),
                    dayName: new Intl.DateTimeFormat('en-EN', {
                      weekday: 'long'
                    }).format(new Date(item.dt_txt))
                  }
                })
            ]
          }
        }
      ),
      publishReplay(1),
      refCount()
    );
  }

  public getInfo(name: string): void {
    this.getWeatherByCityName(name)
      .subscribe(
        res => {
          this.cityWeather.next(res);
        },
        error => {
          console.log(error);
          this.cityWeather.next(cityWeatherInitialState);
        }
      )
  }

  public changeActiveDay(idx: number) {
    const cityWeather = this.cityWeather.value;
    const list = cityWeather.list;
    const updatedList: HourlyInfo[] = [];
    list.forEach((item, index) => {
      if(index === +idx) {
        this.currentDay.next(
          this.transformDataService.getCurrentDayWeather(this.allDaysWeatherInfo, item.dt_txt)
        );
      }
      updatedList.push(item);
    })
    this.cityWeather.next(
      {...cityWeather, list: updatedList}
    )
  }
}
