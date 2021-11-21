import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {PhotoInterface} from "../../../api/photo-gallery-api/interfaces/photo.interface";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo: PhotoInterface = {
    id: 0,
    name: '',
    description: '',
    rating: 0,
    author: '',
    url: ''
  };

  constructor(
    private readonly router: Router
  ) {  }

  onPhotoManagerMenuClick() {
    this.router.navigate([`/photo-manager/${this.photo.id}`]);
  }
}
