import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PhotoInterface} from "../../../api/photo-gallery-api/interfaces/photo.interface";
import {PhotoGalleryApiService} from "../../../api/photo-gallery-api/photo-gallery-api.service";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.scss']
})
export class AddPhotoComponent {
  form: FormGroup;
  pattern = {
    photoName: '^[a-zA-Z ]{2,14}$', // English letters only, space, (2-14 symbols)
    photoDescription: '^[a-zA-Z ,.:!?;0-9\-]{4,54}$', // English letters only, digits, space, allowed ,.:!?-; (4-54 symbols)
    photoAuthor: '^[a-zA-Z0-9 ]{2,18}$' // English letters only, digits, space (2-18 symbols)
  }

  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly photoGalleryApiService: PhotoGalleryApiService
  ) {
    this.form = this.fb.group({
      'name': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern.photoName)
        ]
      ),
      'description': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern.photoDescription)
        ]
      ),
      'rating': this.fb.control(
        5,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(5)
        ]
      ),
      'author': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern.photoAuthor)
        ]
      ),
      'url': this.fb.control(
        'https://www.planetware.com/wpimages/2020/02/new-hampshire-in-pictures-beautiful-places-to-photograph-fall-foliage.jpg',
        [
          Validators.required
        ]
      )
    })
  }

  onSavePhotoClick() {
    if (this.form.valid) {
      const photo: PhotoInterface = this.form.value;
      this.photoGalleryApiService.createPhoto(photo)
        .pipe(
          tap(photo => alert('added')),
          take(1)
        )
        .subscribe();
    }
  }

  onBackClick() {
    this.router.navigate(['/']);
  }
}
