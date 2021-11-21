import { Component, OnInit } from '@angular/core';
import {HomeService} from "./home.service";
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularRecipes$: Observable<RecipeShortInfo[]>;
  healthiestRecipes$: Observable<RecipeShortInfo[]>;
  fastestRecipes$: Observable<RecipeShortInfo[]>;
  cheapestRecipes$: Observable<RecipeShortInfo[]>;

  constructor(private readonly homeService: HomeService) {
    homeService.gettingTheMostPopularRecipes();
    homeService.gettingTheHealthiestRecipes();
    homeService.gettingTheFastestRecipes();
    homeService.gettingTheCheapestRecipes();

    this.popularRecipes$ = homeService.popularRecipes;
    this.healthiestRecipes$ = homeService.healthiestRecipes;
    this.fastestRecipes$ = homeService.fastestRecipes;
    this.cheapestRecipes$ = homeService.cheapestRecipes;
  }

  ngOnInit(): void {}
}
