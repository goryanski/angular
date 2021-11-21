export interface InstructionStep {
  number: number,
  step: string,
  ingredients: IngredientShortInfo[],
  equipment: Equipment[]
}
interface IngredientShortInfo {
  id: number,
  name: string,
  localizedName: string,
  image: string
}
interface Equipment {
  id: number,
  name: string,
  localizedName: string,
  image: string
}
