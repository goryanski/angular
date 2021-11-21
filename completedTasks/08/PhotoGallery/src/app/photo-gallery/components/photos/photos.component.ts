import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {PhotosService} from "../../services/photos.service";
import {Photo} from "../../interfaces/photo.interface";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos: Photo[];

  constructor(
    private readonly router: Router,
    private readonly photosService: PhotosService
  ) {
    this.photos = photosService.photos;
  }

  onAddNewPhotoClick() {
    this.router.navigate(['/add-photo']);
  }
}
