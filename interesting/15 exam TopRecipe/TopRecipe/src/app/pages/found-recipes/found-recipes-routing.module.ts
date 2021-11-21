import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoundRecipesComponent} from "./found-recipes.component";

const routes: Routes = [
  {
    path: '',
    component: FoundRecipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundRecipesRoutingModule { }
