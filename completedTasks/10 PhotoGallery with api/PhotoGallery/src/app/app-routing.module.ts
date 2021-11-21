import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from "./photo-gallery/components/photos/photos.component";
import {ErrorComponent} from "./photo-gallery/components/error/error.component";
import {AddPhotoComponent} from "./photo-gallery/components/add-photo/add-photo.component";
import {EditPhotoComponent} from "./photo-gallery/components/photo-manager/edit-photo/edit-photo.component";
import {PhotoManagerComponent} from "./photo-gallery/components/photo-manager/photo-manager.component";
import {PhotoCommentsComponent} from "./photo-gallery/components/photo-manager/photo-comments/photo-comments.component";

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
  },
  {
    path: 'add-photo',
    component: AddPhotoComponent
  },
  {
    path: 'photo-manager/:id',
    component: PhotoManagerComponent,
    children: [
      {
        path: 'edit-photo/:id',
        component: EditPhotoComponent
      },
      {
        path: 'comments/:id',
        component: PhotoCommentsComponent
      }
    ]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
