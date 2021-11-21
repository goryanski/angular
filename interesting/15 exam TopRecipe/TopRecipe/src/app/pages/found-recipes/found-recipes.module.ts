import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoundRecipesRoutingModule } from './found-recipes-routing.module';
import {ComponentsModule} from "../../components/components.module";
import {FoundRecipesComponent} from "./found-recipes.component";
import {FoundRecipesService} from "./found-recipes.service";
import {SharedModule} from "../../shared.module";


@NgModule({
  declarations: [
    FoundRecipesComponent
  ],
  imports: [
    CommonModule,
    FoundRecipesRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  providers: [
    FoundRecipesService
  ],
})
export class FoundRecipesModule { }
