import {Injectable} from "@angular/core";
import {RecipesApiService} from "../../api/recipes-api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RecipeFullInfoModel} from "../../api/interfaces/recipeFullInfoModel";
import {AppEnvironment} from "../../shared/app-environment.interface";
import {SimilarRecipe} from "../../api/interfaces/ similarRecipe";
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";

@Injectable()
export class RecipeInfoService {
  private readonly displayedSimilarRecipesNumber: number = 6;

  constructor(
    private readonly recipesApiService: RecipesApiService,
    private readonly appEnv: AppEnvironment
  ) {}

  getRecipeById(id: number): Observable<RecipeFullInfoModel> {
    return this.recipesApiService.getRecipeById(id)
      .pipe(
        map(res => {
          let instructionSteps = res.analyzedInstructions.length === 0
            ? [] :  res.analyzedInstructions[0].steps;
          let recipe: RecipeFullInfoModel = {
            id: res.id,
            aggregateLikes: res.aggregateLikes,
            cheap: res.cheap,
            dairyFree: res.dairyFree,
            glutenFree: res.glutenFree,
            healthScore: res.healthScore,
            image: res.image,
            pricePerServing: res.pricePerServing,
            readyInMinutes: res.readyInMinutes,
            servings: res.servings,
            summary: res.summary,
            title: res.title,
            vegetarian: res.vegetarian,
            veryHealthy: res.veryHealthy,
            veryPopular: res.veryPopular,
            instructionSteps: instructionSteps,
            ingredientsImg: this.getImageLink(res.id, 'ingredientWidget.png'),
            nutritionImg: this.getImageLink(res.id, 'nutritionWidget.png')
          }
          return recipe;
        }),
      );
  }
  getImageLink(id: number, imgName: string): string {
    return [
      this.appEnv.recipesApi.url,
      `${id}`,
      `${imgName}?apiKey=${this.appEnv.recipesApi.key}`
    ].join('/')
  }

  getSimilarRecipes(id: number): Observable<RecipeShortInfo[]>{
    return this.recipesApiService.getSimilarRecipes(id, this.displayedSimilarRecipesNumber)
      .pipe(
        map((res: SimilarRecipe[]) => {
          let recipeShortInfos: RecipeShortInfo[] = [];
          res.forEach(recipe => {
            let recipeShortInfo: RecipeShortInfo = {
              id: recipe.id,
              title: recipe.title,
              imageType: recipe.imageType,
              image: 'https://image.freepik.com/free-photo/business-and-financial-concept-with-magnifying-glass-question-mark-on-yellow-background-flat-lay_176474-6555.jpg'
            };
            recipeShortInfos.push(recipeShortInfo);
          })
          return recipeShortInfos;
        })
      );
  }
}
