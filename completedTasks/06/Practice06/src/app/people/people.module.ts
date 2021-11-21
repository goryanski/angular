import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {PeopleComponent} from "./people.component";
import {PersonComponent} from "./person/person.component";
import {CreatePersonComponent} from "./create-person/create-person.component";
import {EditPersonComponent} from "./edit-person/edit-person.component";
import {PeopleService} from "./people.service";

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
  providers: [
    PeopleService
  ],
  exports: [
    PeopleComponent
  ]
})
export class PeopleModule { }
