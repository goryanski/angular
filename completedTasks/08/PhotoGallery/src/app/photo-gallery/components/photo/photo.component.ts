import {Component, Input} from '@angular/core';
import {Photo} from "../../interfaces/photo.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent {
  @Input() photo: Photo = {
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

  onEditPhoto() {
    this.router.navigate([`/edit-photo/${this.photo.id}`]);
  }
}
