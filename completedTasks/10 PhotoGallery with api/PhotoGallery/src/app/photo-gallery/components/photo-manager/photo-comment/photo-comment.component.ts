import {Component, Input} from "@angular/core";
import {CommentInterface} from "../../../../api/photo-gallery-api/interfaces/comment.interface";

@Component({
  selector: 'photo-comment',
  templateUrl: './photo-comment.component.html',
  styleUrls: ['./photo-comment.component.scss']
})
export class PhotoCommentComponent {
  @Input() comment: CommentInterface = {
    id: 0,
    author: '',
    text: '',
    date: new Date()
  }


}
