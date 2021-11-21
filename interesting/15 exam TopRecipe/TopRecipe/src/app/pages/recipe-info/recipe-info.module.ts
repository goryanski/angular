import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeInfoRoutingModule } from './recipe-info-routing.module';
import { RecipeInfoComponent } from './recipe-info.component';
import {RecipeInfoService} from "./recipe-info.service";
import {SharedModule} from "../../shared.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    RecipeInfoComponent
  ],
    imports: [
        CommonModule,
        RecipeInfoRoutingModule,
        SharedModule,
        ComponentsModule
    ],
  providers: [
    RecipeInfoService
  ],
})
export class RecipeInfoModule { }
