import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeInfoComponent} from "./recipe-info.component";

const routes: Routes = [
  {
    path: '',
    component: RecipeInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeInfoRoutingModule { }
