import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Person} from "../person/person.component";
import {birthValidator} from "../../shared/validators/birth-validator";

function formatDate(date: Date) {
  let year = date.getFullYear();
  let month =date.getMonth() + 1;
  let monthStr = month.toString();
  if(month.toString().length < 2) {
    monthStr = 0 + monthStr;
  }
  let day = date.getDate();
  return `${year}-${monthStr}-${day}`;
}

@Component({
  selector: 'edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent {
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
  pattern = '^[A-Z][a-zA-Z0-9]{2,11}$'; // English letters only (and digits), uppercase first letter, (3-12 symbols)
  @Output() saveEditedPersonEvent = new EventEmitter<Person>();
  @Input() contactWasSelected = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'firstName': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]),
      'lastName': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]),
      'patronymic': this.fb.control(
        'Default',
        [
          Validators.required,
          Validators.pattern(this.pattern)
        ]),
      'email': this.fb.control(
        'igor@gmail.com',
        [
          Validators.required,
          Validators.email
        ]),
      'birth': this.fb.control('2000-12-10', [
        Validators.required,
        birthValidator(new Date(1900, 1, 1), new Date())
      ]),
      'phonesNumbers': this.fb.array([])
    });
  }

  get phonesNumbersControls(): FormArray {
    return this.form.controls['phonesNumbers'] as FormArray;
  }

  // region ChangeFormRegion
  hideFormBtnClick() {
    this.isFormHidden = true;
  }
  addPhoneNumberInput() {
    (<FormArray>this.form.controls['phonesNumbers']).push(new FormControl('',
      [Validators.required,
        Validators.pattern('^[+][0-9]{12}$') // +380934094351
      ])
    );
  }
  removePhoneNumberInput(idx: number) {
    (this.form.controls['phonesNumbers'] as FormArray).controls.splice(idx, 1);
  }
  // endregion

  onFillFormWithSelectedContactClick() {
    this.isFormHidden = false;

    // clear form
    this.form.reset();
    (this.form.controls['phonesNumbers'] as FormArray).clear();

    // fill inputs with new values (to edit form)
    this.form.patchValue({
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      patronymic: this.person.patronymic,
      email: this.person.email,
      birth: formatDate(this.person.birth)
    }, { emitEvent: false });


    // fill phones numbers inputs
    this.person.phonesNumbers.forEach(number => {
      this.addPhoneNumberInput(); // first add empty inputs with validators
    });
    // then add phones numbers to these inputs
    (<FormArray>this.form.controls['phonesNumbers']).patchValue(this.person.phonesNumbers);
  }

  onSaveContactClick() {
    if (this.form.valid) {
      const person: Person = this.form.value;

      const { birth } = this.form.value;
      person.birth = new Date(birth);
      person.id = this.person.id;

      this.form.reset();
      (this.form.controls['phonesNumbers'] as FormArray).clear();
      this.saveEditedPersonEvent.emit(person);
    }
  }
}
