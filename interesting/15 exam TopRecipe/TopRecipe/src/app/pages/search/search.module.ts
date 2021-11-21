import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class SearchModule { }
