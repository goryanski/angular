import {Component, Input, Output, EventEmitter} from '@angular/core';

export interface Person {
  id?: number;
  firstName: string;
  lastName: string;
  patronymic: string;
  birth: Date;
  email: string;
  phonesNumbers: string[];
  isSelected: boolean;
}

@Component({
  selector: 'app-people-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  @Input() person: Person = {
    lastName: '',
    firstName: '',
    patronymic: '',
    birth: new Date(),
    email: '',
    phonesNumbers: [],
    isSelected: false
  };

  @Output() editEvent = new EventEmitter<Person>()
  onSelectContactClick() {
    this.person.isSelected = true;
    this.editEvent.emit(this.person);
  }
}
