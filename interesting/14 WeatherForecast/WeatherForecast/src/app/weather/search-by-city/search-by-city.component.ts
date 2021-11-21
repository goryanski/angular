import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WeatherApiService} from "../weather-api.service";

@Component({
  selector: 'app-search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.less']
})
export class SearchByCityComponent implements OnInit {
  form: FormGroup;

  constructor(
    private readonly weatherApiService: WeatherApiService
  ) {
    this.form = new FormGroup({
      'searchField': new FormControl('Dnipro', Validators.required)
    });

    this.onSearchClick();
  }

  ngOnInit(): void {
  }

  onSearchClick() {
    const cityName: string = this.form.value['searchField'];
    this.weatherApiService.getInfo(cityName);
  }
}
