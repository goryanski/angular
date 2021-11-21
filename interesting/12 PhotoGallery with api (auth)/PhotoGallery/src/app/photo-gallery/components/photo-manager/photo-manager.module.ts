import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {PhotoManagerComponent} from "./photo-manager.component";
import {EditPhotoComponent} from "./edit-photo/edit-photo.component";
import {PhotoCommentsComponent} from "./photo-comments/photo-comments.component";
import {RouterModule} from "@angular/router";
import {PhotoCommentComponent} from "./photo-comment/photo-comment.component";

@NgModule({
  declarations: [
    PhotoManagerComponent,
    EditPhotoComponent,
    PhotoCommentsComponent,
    PhotoCommentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    PhotoManagerComponent
  ]
})
export class PhotoManagerModule { }
