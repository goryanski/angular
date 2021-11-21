import {Component, EventEmitter, Output} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {forbiddenWordValidator} from "../../shared/validators/forbidden-words-validator";
import {InputStatus} from "../../shared/enums/form-input-status.enum";


@Component({
  selector: 'app-countries-search',
  templateUrl: './countries-search.component.html',
  styleUrls: ['./countries-search.component.scss']
})
export class CountriesSearchComponent {
  form: FormGroup;
  @Output() searchFieldChangedEvent = new EventEmitter<string>();
  @Output() wrongCountryNameEvent = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'searchCities': this.fb.control(
        '',
        [
          forbiddenWordValidator(/Vietnam/i)
        ])
    });

    this.form.controls['searchCities'].valueChanges.subscribe(value => {
      this.searchFieldChangedEvent.emit(value);
    });

    this.form.controls['searchCities'].statusChanges.subscribe((status: string) => {
      if (status == InputStatus.INVALID) {
        this.wrongCountryNameEvent.emit();
      }
    });
  }
}
