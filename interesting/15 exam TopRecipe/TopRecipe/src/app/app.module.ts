import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppEnvironment} from "./shared/app-environment.interface";
import {environment} from "../environments/environment";
import {ComponentsModule} from "./components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared.module";
import {ApiServicesModule} from "./api/api-services.module";
import {QueryHttpInterceptor} from "./shared/http/query-http.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    SharedModule,
    ApiServicesModule
  ],
  providers: [
    {
      provide: AppEnvironment,
      useValue: environment
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QueryHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
