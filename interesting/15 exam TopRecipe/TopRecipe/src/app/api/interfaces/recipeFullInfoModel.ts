import {InstructionStep} from "./instructionStep";

export interface RecipeFullInfoModel {
  id: number,
  title: string,
  image: string,

  // icons
  cheap: boolean,
  vegetarian: boolean,
  veryHealthy: boolean
  veryPopular: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  healthScore: number,
  pricePerServing: number,
  readyInMinutes: number,
  aggregateLikes: number,
  servings: number,

  summary: string
  ingredientsImg: string,
  nutritionImg: string,
  instructionSteps: InstructionStep[]
}
