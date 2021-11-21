import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CountriesComponent} from "./countries.component";
import {CountriesSearchComponent} from "./countries-search/countries-search.component";
import {CountryComponent} from "./country/country.component";
import {CountriesService} from "./countries.service";

@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent,
    CountriesSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    CountriesService
  ],
  exports: [
    CountriesComponent
  ]
})
export class CountriesModule { }
