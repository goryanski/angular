import {InstructionStep} from "./instructionStep";

export interface RecipeFullInfoResponse {
  vegetarian: boolean,
  vegan: boolean,
  glutenFree: boolean,
  dairyFree: boolean,
  veryHealthy: boolean,
  cheap: boolean,
  veryPopular: boolean,
  sustainable: boolean,
  weightWatcherSmartPoints: number,
  gaps: string,
  lowFodmap: boolean,
  aggregateLikes: number,
  spoonacularScore: number,
  healthScore: number,
  creditsText: string,
  license: string,
  sourceName: string,
  pricePerServing: number,
  extendedIngredients: Ingredient[],
  id: number,
  title: string,
  readyInMinutes: number,
  servings: number,
  sourceUrl: string,
  image: string,
  imageType: string,
  summary: string,
  cuisines: string[],
  dishTypes: [],
  diets: string[],
  occasions: [],
  winePairing: WinePairing,
  instructions: string,
  "analyzedInstructions": AnalyzedInstructions[],
  "originalId": null,
  "spoonacularSourceUrl": string
}


// nested
interface AnalyzedInstructions {
  name: string,
  steps: InstructionStep[]
}
interface WinePairing {
  pairedWines: string[],
  pairingText: string,
  productMatches: ProductMatches[]
}
interface ProductMatches {
  id: number,
  title: string,
  description: string,
  price: string,
  imageUrl: string,
  averageRating: number,
  ratingCount: number,
  score: number,
  link: string
}
interface Ingredient {
  id: number,
  aisle: string,
  image: string,
  consistency: string,
  name: string,
  nameClean: string,
  original: string,
  originalString: string,
  originalName: string,
  amount: number,
  unit: string,
  meta: [],
  metaInformation: [],
  measures: Measures
}
interface Measures {
  us: Info
  metric: Info
}
interface Info {
  amount: number,
  unitShort: string,
  unitLong: string
}
