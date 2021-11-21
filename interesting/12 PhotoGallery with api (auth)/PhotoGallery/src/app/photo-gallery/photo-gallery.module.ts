import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { ErrorComponent } from './components/error/error.component';
import {PhotoManagerModule} from "./components/photo-manager/photo-manager.module";


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent,
    AddPhotoComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhotoManagerModule
  ],
  providers: [],
  exports: [
    PhotosComponent
  ]
})
export class PhotoGalleryModule { }
