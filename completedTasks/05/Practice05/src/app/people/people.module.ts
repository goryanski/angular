import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PeopleComponent} from "./people.component";
import {PersonComponent} from "./person/person.component";
import {CreatePersonComponent} from "./create-person/create-person.component";
import {EditPersonComponent} from "./edit-person/edit-person.component";

@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent,
    CreatePersonComponent,
    EditPersonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    PeopleComponent
  ]
})
export class PeopleModule { }
