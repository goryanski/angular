import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {PhotoGalleryApiService} from "./photo-gallery-api/photo-gallery-api.service";
import {AuthApiService} from "./auth/auth-api.service";

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    PhotoGalleryApiService,
    AuthApiService
  ],
  exports: []
})
export class ServicesApiModule { }
