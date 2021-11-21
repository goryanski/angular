import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {WeatherModule} from "./weather/weather.module";
import {AppEnvironment} from "./shared/app-environment.interface";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule
  ],
  providers: [
    {
      provide: AppEnvironment,
      useValue: environment
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
