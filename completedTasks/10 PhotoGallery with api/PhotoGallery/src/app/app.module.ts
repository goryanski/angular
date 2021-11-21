import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PhotoGalleryModule} from "./photo-gallery/photo-gallery.module";
import {HttpClientModule} from "@angular/common/http";
import {ServicesApiModule} from "./api/services-api.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoGalleryModule,
    HttpClientModule,
    ServicesApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
