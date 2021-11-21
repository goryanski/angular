import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Person} from "./contact.interface";
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Person[];
  @Output() selectedPerson: Person = {
    lastName: '',
    firstName: '',
    patronymic: '',
    birth: new Date(),
    email: '',
    phonesNumbers: [],
    isSelected: false
  };
  isContactSelected  = false;

  constructor(private peopleService: PeopleService) {
    this.people = peopleService.people;
  }

  onCreatePerson(newPerson: Person) {
    this.peopleService.AddNewPerson(newPerson);
    console.log(this.people);
  }
  onSaveEditedPerson(editedPerson: Person) {
    this.peopleService.changeData(editedPerson);
    this.isContactSelected = false;
  }
  onSelectContactClick(selectedPerson: Person) {
    // reset select of all contacts except this one
    this.peopleService.unselectPeopleExcept(selectedPerson);
    this.selectedPerson = selectedPerson;
    this.isContactSelected = true;
  }
}
