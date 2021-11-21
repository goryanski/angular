import {Injectable} from "@angular/core";
import {HourlyInfo} from "./interfaces/hourlyInfo";
import {DetailedHourWeatherInfo} from "./interfaces/detailedDayInfo";

@Injectable()
export class TransformDataService {
  constructor() {}

//#region "list of days"
  getSeparateDaysWeather(list: Array<HourlyInfo>) {
    let weatherFromTomorrow: HourlyInfo[] = this.removeWeatherToday(list);
    let separateDays = [];
    for(let i = 0; i < weatherFromTomorrow.length; i++) {
      if(weatherFromTomorrow[i].dt_txt.substring(11, 16) === '12:00') {
        separateDays.push(weatherFromTomorrow[i]);
      }
    }
    // remove data for today
    if(new Date().getHours() < 12) {
      separateDays.shift();
    }
    return separateDays;
  }
  getShortDate(date: string) {
    let newDate = new Date(date);
    let day = newDate.getDate() > 9 ? newDate.getDate() : '0' + newDate.getDate();
    let month = newDate.getMonth() >= 9 ? Number(newDate.getMonth()) + 1 : '0' + (Number(newDate.getMonth()) + 1);
    return day + '.' + month;
  }

  getDate(hourlyInfo: HourlyInfo) {
    return {
      ...hourlyInfo,
      date: this.getShortDate(hourlyInfo.dt_txt)
    }
  }

  getImage(hourlyInfo: HourlyInfo) {
    return {
      ...hourlyInfo,
      img: `http://openweathermap.org/img/wn/${hourlyInfo.weather[0].icon}@2x.png`
    }
  }
  getDegrees(hourlyInfo: HourlyInfo) {
    return {
      ...hourlyInfo,
      degrees: Math.round(hourlyInfo.main.temp)
    }
  }
  getDescription(hourlyInfo: HourlyInfo) {
    return {
      ...hourlyInfo,
      description: hourlyInfo.weather[0].description
    }
  }

  removeWeatherToday(list: Array<HourlyInfo>) {
    let weatherFromTomorrow: HourlyInfo[] = [];
    let today = new Date().getDate();
    for(let i = 0; i < list.length; i++) {
      if(new Date(list[i].dt_txt).getDate() !== today) {
        weatherFromTomorrow.push(list[i]);
      }
    }
    return weatherFromTomorrow;
  }

//#endregion "list of days"


// CurrentDayWeather
  getCurrentDayWeather(weatherList: HourlyInfo[], date: string):DetailedHourWeatherInfo[]  {
    const currentDayOfMonth = new Date(date).getDate();
    let selectedWeather: DetailedHourWeatherInfo[] = [];
    for (let i = 0; i < weatherList.length; i++) {
      // select weather by currentDayOfMonth
      if(currentDayOfMonth === new Date(weatherList[i].dt_txt).getDate()) {
        let detailedDayWeather: DetailedHourWeatherInfo = {
          time: weatherList[i].dt_txt.substring(11, 16),
          description: weatherList[i].weather[0].main,
          img: `http://openweathermap.org/img/wn/${weatherList[i].weather[0].icon}@2x.png`,
          temp: Math.round(weatherList[i].main.temp),
          tempReal: Math.round(weatherList[i].main.feels_like),
          date: this.getSpecialDateFormat(weatherList[i].dt_txt)
        }
        selectedWeather.push(detailedDayWeather);
      }
    }
    return selectedWeather;
  }

  getSpecialDateFormat(date: string): string {
    let weekDay = new Intl.DateTimeFormat('en-EN', {
      weekday: 'long'
    }).format(new Date(date));
    let numericDate = this.getShortDate(date);
    return `${weekDay}, ${numericDate}`;
  }
}

