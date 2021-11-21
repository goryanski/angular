import {Component, Input, OnInit} from '@angular/core';
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";
import {Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-recipe-preview',
  templateUrl: './recipe-preview.component.html',
  styleUrls: ['./recipe-preview.component.scss']
})
export class RecipePreviewComponent implements OnInit {
  @Input() recipe: RecipeShortInfo = {
    id: 0,
    title: '',
    image: '',
    imageType: ''
  }
  constructor(
    private readonly router: Router,
    private readonly scroll: ViewportScroller
  ) {
    this.scroll.scrollToPosition([0,0]);
  }

  ngOnInit(): void {}

  onRecipeClick() {
    this.router.navigate([`recipe-info/${this.recipe.id}`]);
  }
}
