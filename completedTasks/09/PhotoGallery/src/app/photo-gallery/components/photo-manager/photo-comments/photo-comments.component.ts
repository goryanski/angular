import {Component, OnInit} from "@angular/core";
import {Opinion} from "../../../interfaces/comment.interface";
import {PhotosService} from "../../../services/photos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss']
})
export class PhotoCommentsComponent implements OnInit {
  comments: Opinion[] = [];

  constructor(
    private readonly photosService: PhotosService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = Number(params.id);
      const photo = this.photosService.getPhotoById(id);
      if(photo != undefined && photo.comments != undefined) {
        this.comments = photo.comments;
      }
    });
  }
}
