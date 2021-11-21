import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoComponent } from './components/photo/photo.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { EditPhotoComponent } from './components/edit-photo/edit-photo.component';
import { ErrorComponent } from './components/error/error.component';
import {PhotosService} from "./services/photos.service";


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent,
    AddPhotoComponent,
    EditPhotoComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    PhotosService
  ],
  exports: [
    PhotosComponent
  ]
})
export class PhotoGalleryModule { }
