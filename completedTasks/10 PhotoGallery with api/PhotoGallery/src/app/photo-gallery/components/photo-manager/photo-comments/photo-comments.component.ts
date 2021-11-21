import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {CommentInterface} from "../../../../api/photo-gallery-api/interfaces/comment.interface";
import {PhotoGalleryApiService} from "../../../../api/photo-gallery-api/photo-gallery-api.service";

@Component({
  selector: 'photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {
  // @ts-ignore
  comments$: Observable<CommentInterface[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly photoGalleryApiService: PhotoGalleryApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let photoId = Number(params.id);
      this.comments$ = this.photoGalleryApiService.getComments(photoId);
    });
  }
}
