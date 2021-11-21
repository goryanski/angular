import {Injectable} from "@angular/core";
import {RecipesApiService} from "../../api/recipes-api.service";
import {BehaviorSubject, Observable} from "rxjs";
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";
import {take} from "rxjs/operators";

export const recipeInitialState: RecipeShortInfo[] = [];

@Injectable()
export class HomeService {
  private readonly displayedRecipesNumber: number = 3;

  popularRecipes: BehaviorSubject<RecipeShortInfo[]> = new BehaviorSubject<RecipeShortInfo[]>(recipeInitialState);
  healthiestRecipes: BehaviorSubject<RecipeShortInfo[]> = new BehaviorSubject<RecipeShortInfo[]>(recipeInitialState);
  fastestRecipes: BehaviorSubject<RecipeShortInfo[]> = new BehaviorSubject<RecipeShortInfo[]>(recipeInitialState);
  cheapestRecipes: BehaviorSubject<RecipeShortInfo[]> = new BehaviorSubject<RecipeShortInfo[]>(recipeInitialState);

  constructor(
    private readonly recipesApiService: RecipesApiService
  ) {}

  gettingTheMostPopularRecipes(): void {
    this.recipesApiService.getTheMostPopularRecipes(this.displayedRecipesNumber)
      .pipe(take(1))
      .subscribe(res => this.popularRecipes.next(res));
  }
  gettingTheHealthiestRecipes(): void {
    this.recipesApiService.getTheHealthiestRecipes(this.displayedRecipesNumber)
      .pipe(take(1))
      .subscribe(res => this.healthiestRecipes.next(res));
  }
  gettingTheFastestRecipes(): void {
    this.recipesApiService.getTheFastestRecipes(this.displayedRecipesNumber)
      .pipe(take(1))
      .subscribe(res => this.fastestRecipes.next(res));
  }
  gettingTheCheapestRecipes(): void {
    this.recipesApiService.getTheCheapestRecipes(this.displayedRecipesNumber)
      .pipe(take(1))
      .subscribe(res => this.cheapestRecipes.next(res));
  }
}
