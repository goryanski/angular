import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../person/person.component";

@Component({
  selector: 'create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent {
  form: FormGroup;
  isFormHidden = true;
  @Input() person: Person = {
    lastName: '',
    firstName: '',
    patronymic: '',
    birth: new Date(),
    email: '',
    phonesNumbers: [],
    isSelected: false
  };
  pattern = '^[A-Z][a-z]{2,11}$'; // English letters only, uppercase first letter, (3-12 symbols)
  @Output() createNewPersonEvent = new EventEmitter<Person>();


  constructor() {
    this.form = new FormGroup({
      'firstName': new FormControl(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]),
      'lastName': new FormControl(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]),
      'patronymic': new FormControl(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]),
      'email': new FormControl(
        'igor@gmail.com',
        [
          Validators.required,
          Validators.email
        ]),
      'birth': new FormControl('2000-12-12', Validators.required),
      'phonesNumbers': new FormArray([])
    });
  }

  get phonesNumbersControls(): FormArray {
    return this.form.controls['phonesNumbers'] as FormArray;
  }

  // region ChangeFormRegion
  onAddNewContactBtnClick() {
    this.isFormHidden = false;
  }
  hideFormBtnClick() {
    this.isFormHidden = true;
  }
  addPhoneNumberInput(innerText: string = '') {
    (<FormArray>this.form.controls['phonesNumbers']).push(new FormControl(innerText,
      [Validators.required,
        Validators.pattern('^[+][0-9]{12}$') // +380934094351
      ])
    );
  }
  removePhoneNumberInput(idx: number) {
    (this.form.controls['phonesNumbers'] as FormArray).controls.splice(idx, 1);
  }
  // endregion


  onCreatePersonClick() {
    if (this.form.valid) {
      const person: Person = this.form.value;

      const { birth } = this.form.value;
      person.birth = new Date(birth);

      this.form.reset();
      (this.form.controls['phonesNumbers'] as FormArray).clear();
      this.createNewPersonEvent.emit(person);
    }
  }
}
