import {Component, Input} from "@angular/core";
import {Opinion} from "../../../interfaces/comment.interface";

@Component({
  selector: 'photo-comment',
  templateUrl: './photo-comment.component.html',
  styleUrls: ['./photo-comment.component.scss']
})
export class PhotoCommentComponent {
  @Input() comment: Opinion = {
    id: 0,
    author: '',
    text: '',
    date: new Date()
  }
}
