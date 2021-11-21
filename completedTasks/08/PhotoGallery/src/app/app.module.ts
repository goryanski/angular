import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PhotoGalleryModule} from "./photo-gallery/photo-gallery.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
