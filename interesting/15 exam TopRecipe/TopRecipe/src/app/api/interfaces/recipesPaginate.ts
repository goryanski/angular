import {RecipeShortInfo} from "./recipeShortInfo";

export interface RecipesPaginate {
  results: RecipeShortInfo[],
  "offset": number,
  "number": number,
  "totalResults": number
}
