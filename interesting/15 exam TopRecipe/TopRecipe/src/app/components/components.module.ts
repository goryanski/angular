import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared.module";
import { RecipePreviewComponent } from './recipe-preview/recipe-preview.component';

// common components

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RecipePreviewComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RecipePreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class ComponentsModule { }
