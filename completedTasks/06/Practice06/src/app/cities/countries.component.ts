import {Component} from "@angular/core";
import {CountriesService} from "./countries.service";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  foundCountries: string[];

  constructor(private countriesService: CountriesService ) {
    this.foundCountries = countriesService.allCountries;
  }

  onSearchFieldChanged(value: string) {
    this.foundCountries = this.countriesService.getMatchedCountries(value);
  }
  onWrongCountryName() {
    this.foundCountries = this.countriesService.getError();
  }
}
