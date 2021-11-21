import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'photo-manager',
  templateUrl: './photo-manager.component.html',
  styleUrls: ['./photo-manager.component.scss']
})
export class PhotoManagerComponent implements OnInit {
  selectedPhotoId: number = 0;
  currentUrl: string = '';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.currentUrl = `${url[0].path}/${url[1].path}`;
    });
    this.activatedRoute.params.subscribe(params => {
      this.selectedPhotoId = Number(params.id);
    });
  }

  onEditClick() {
    this.router.navigate([`${this.currentUrl}/edit-photo/${this.selectedPhotoId}`]);
  }

  onShowCommentsClick() {
    this.router.navigate([`${this.currentUrl}/comments/${this.selectedPhotoId}`]);
  }

  onBackClick() {
    this.router.navigate(['/']);
  }
}
