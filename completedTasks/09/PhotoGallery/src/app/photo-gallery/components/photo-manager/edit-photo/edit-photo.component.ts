import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Photo} from "../../../interfaces/photo.interface";
import {PhotosService} from "../../../services/photos.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(
    private fb: FormBuilder,
    private readonly photosService: PhotosService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
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
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.selectedPhotoId = Number(params.id);
      // get photo from photosService by id
      const photo = this.photosService.getPhotoById(this.selectedPhotoId);
      if(photo != undefined) {
        // fill edit form inputs with new values
        this.form.patchValue({
          name: photo.name,
          description: photo.description,
          rating: photo.rating,
          author: photo.author,
          url: photo.url
        }, { emitEvent: false });
      }
    });
  }

  onEditPhotoClick() {
    if (this.form.valid) {
      const photo: Photo = this.form.value;
      photo.id = this.selectedPhotoId;
      this.photosService.editPhoto(photo);
      this.router.navigate(['/']);
    }
  }
}
