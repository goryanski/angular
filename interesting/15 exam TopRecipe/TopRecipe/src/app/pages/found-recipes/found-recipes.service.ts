import {Injectable} from "@angular/core";
import {RecipesApiService} from "../../api/recipes-api.service";
import {Observable} from "rxjs";
import {RecipeShortInfo} from "../../api/interfaces/recipeShortInfo";
import {map} from "rxjs/operators";
import {SearchResponse} from "../../api/interfaces/searchResponse";


@Injectable()
export class FoundRecipesService {
  private readonly displayedFoundRecipesNumber: number = 10;

  constructor(
    private readonly recipesApiService: RecipesApiService
  ) { }

  getFoundRecipes(query: string): Observable<RecipeShortInfo[]> {
    return this.recipesApiService.getFoundRecipes(query, this.displayedFoundRecipesNumber)
      .pipe(
        map((res: SearchResponse[]) => {
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
      )
  }
}
