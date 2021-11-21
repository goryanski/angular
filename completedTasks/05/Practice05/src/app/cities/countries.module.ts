import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CountriesComponent} from "./countries.component";
import {CountriesSearchComponent} from "./countries-search/countries-search.component";
import {CountryComponent} from "./country/country.component";

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
  providers: [],
  exports: [
    CountriesComponent
  ]
})
export class CountriesModule { }
