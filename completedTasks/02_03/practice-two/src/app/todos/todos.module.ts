import { NgModule } from '@angular/core';
import {TodosComponent} from "./todos.component";
import {TodoComponent} from "./todo/todo.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  exports: [
    TodosComponent
  ]
})
export class  TodosModule { }
