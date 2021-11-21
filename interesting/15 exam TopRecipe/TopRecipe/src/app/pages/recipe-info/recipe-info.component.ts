import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, switchMap, take} from "rxjs/operators";
import {RecipeInfoService} from "./recipe-info.service";
import {RecipeFullInfoModel} from "../../api/interfaces/recipeFullInfoModel";
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.scss']
})
export class RecipeInfoComponent implements OnInit {
  recipe: RecipeFullInfoModel = {
    id: 0,
    title: '',
    image: '',
    cheap: false,
    vegetarian: false,
    veryHealthy: false,
    veryPopular: false,
    glutenFree: false,
    dairyFree: false,
    healthScore: 0,
    pricePerServing: 0,
    readyInMinutes: 0,
    aggregateLikes: 0,
    servings: 0,
    summary: '',
    ingredientsImg: '',
    nutritionImg: '',
    instructionSteps: []
  };
  similarRecipes: RecipeShortInfo[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly recipeInfoService: RecipeInfoService,
    private readonly scroll: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params.id),
      switchMap((id: number) => {
        this.recipeInfoService.getSimilarRecipes(id)
          .pipe(take(1))
          .subscribe(res => this.similarRecipes = res);
        return this.recipeInfoService.getRecipeById(id);
      }),
      take(1)
    ).subscribe((recipe: RecipeFullInfoModel) => {
      console.log('recipe: ', recipe)
      this.recipe = recipe;
    })
  }

  OnSimilarRecipeClick() {
    window.location.reload();
    this.scroll.scrollToPosition([0,0]);
  }
}
