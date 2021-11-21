import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PhotoInterface} from "../../../../api/photo-gallery-api/interfaces/photo.interface";
import {PhotoGalleryApiService} from "../../../../api/photo-gallery-api/photo-gallery-api.service";
import {Observable} from "rxjs";
import {take, tap} from "rxjs/operators";

@Component({
  selector: 'edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {
  form: FormGroup;
  pattern = {
    photoName: '^[a-zA-Z ]{2,14}$', // English letters only, space, (2-14 symbols)
    photoDescription: '^[a-zA-Z ,.:!?;0-9\-]{4,54}$', // English letters only, digits, space, allowed ,.:!?-; (4-54 symbols)
    photoAuthor: '^[a-zA-Z0-9 ]{2,18}$' // English letters only, digits, space (2-18 symbols)
  }
  selectedPhotoId: number = 0;
  // @ts-ignore
  photo$: Observable<PhotoInterface>;

  constructor(
    private fb: FormBuilder,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly photoGalleryApiService: PhotoGalleryApiService
  ) {
    this.form = this.fb.group({
      'name': this.fb.control(
        '',
        [
          Validators.required,
          Validators.pattern(this.pattern.photoName)
        ]
      ),
      'description': this.fb.control(
        '',
        [
          Validators.required,
          Validators.pattern(this.pattern.photoDescription)
        ]
      ),
      'rating': this.fb.control(
        0,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(5)
        ]
      ),
      'author': this.fb.control(
        '',
        [
          Validators.required,
          Validators.pattern(this.pattern.photoAuthor)
        ]
      ),
      'url': this.fb.control(
        '',
        [
          Validators.required
        ]
      )
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.selectedPhotoId = Number(params.id);

      this.photoGalleryApiService.getPhotoById(this.selectedPhotoId)
        .subscribe(photo =>
          this.form.patchValue({
            name: photo.name,
            description: photo.description,
            rating: photo.rating,
            author: photo.author,
            url: photo.url
          }, {emitEvent: false})
        );
    })
  }

  onEditPhotoClick() {
    if (this.form.valid) {
      const photo: PhotoInterface = this.form.value;
      photo.id = this.selectedPhotoId;
      this.photoGalleryApiService.editPhoto(photo)
        .pipe(
          tap(photo => alert('edited')),
          take(1)
        )
        .subscribe();
    }
  }
}
