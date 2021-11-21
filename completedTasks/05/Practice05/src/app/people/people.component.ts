import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Person} from "./person/person.component";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Person[] = [
    {
      id: 1,
      firstName: 'FirstName1',
      lastName: 'LastName1',
      patronymic: 'Patronymic1',
      birth: new Date(1990, 10, 10),
      email: 'lastName1@gmail.com',
      phonesNumbers: ['+380934494320', '+380964494111'],
      isSelected: false
    },
    {
      id: 2,
      firstName: 'FirstName2',
      lastName: 'LastName2',
      patronymic: 'Patronymic2',
      birth: new Date(1993, 2, 20),
      email: 'lastName2@gmail.com',
      phonesNumbers: ['+380938484327', '+380964484133'],
      isSelected: false
    },
    {
      id: 3,
      firstName: 'FirstName3',
      lastName: 'LastName3',
      patronymic: 'Patronymic3',
      birth: new Date(1998, 7, 22),
      email: 'lastName3@gmail.com',
      phonesNumbers: ['+380958484029', '+380994482223'],
      isSelected: false
    }
  ];
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


  onCreatePerson(newPerson: Person) {
    // set new client id
    let lastClientId = this.people[this.people.length-1].id;
    newPerson.id = (lastClientId !== undefined) ? lastClientId + 1 : 1;

    this.people.push(newPerson);
  }
  onSaveEditedPerson(editedPerson: Person) {
    let foundPersonIdx = this.people.findIndex(p => p.id === editedPerson.id);
    this.people[foundPersonIdx] = editedPerson;
    this.people[foundPersonIdx].isSelected = false;
    this.isContactSelected = false;
  }
  onSelectContactClick(selectedPerson: Person) {
    // reset select of all contacts except this one
    this.people.forEach(person => {
      if(person.id != selectedPerson.id) {
        person.isSelected = false;
      }
    });
    this.selectedPerson = selectedPerson;
    this.isContactSelected = true;
  }
}
