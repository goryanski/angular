import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PhotoGalleryModule} from "./photo-gallery/photo-gallery.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ServicesApiModule} from "./api/services-api.module";
import {AuthenticationModule} from "./auth/authentication.module";
import {AuthGuard} from "./common/guards/auth.guard";
import {BrowserLocalStorage} from "./common/storage/local-storage";
import {AppEnvironment} from "./common/app-environment.interface";
import {environment} from "../environments/environment";
import {QueryHttpInterceptor} from "./common/http-interceptors/query-http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoGalleryModule,
    HttpClientModule,
    ServicesApiModule,
    AuthenticationModule
  ],
  providers: [
    AuthGuard,
    BrowserLocalStorage,
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
