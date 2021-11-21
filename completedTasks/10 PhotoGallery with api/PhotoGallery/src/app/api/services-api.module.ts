import { NgModule } from '@angular/core';

import {HttpClientModule} from "@angular/common/http";
import {PhotoGalleryApiService} from "./photo-gallery-api/photo-gallery-api.service";

@NgModule({
  declarations: [

  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    PhotoGalleryApiService
  ],
  exports: []
})
export class ServicesApiModule { }
