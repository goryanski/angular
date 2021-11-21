import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {PhotoInterface} from "../../../api/photo-gallery-api/interfaces/photo.interface";
import {PhotoGalleryApiService} from "../../../api/photo-gallery-api/photo-gallery-api.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {
  photos$: Observable<PhotoInterface[]>;

  constructor(
    private readonly router: Router,
    private readonly photoGalleryApiService: PhotoGalleryApiService
  ) {
    console.log('photos constructor works!');
    this.photos$ = photoGalleryApiService.getAllPhotos();
  }

  onAddNewPhotoClick() {
    this.router.navigate(['/add-photo']);
  }
}
