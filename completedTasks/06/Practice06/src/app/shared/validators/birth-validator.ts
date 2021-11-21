import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {Output} from "@angular/core";

export function birthValidator(min: Date, max: Date): ValidatorFn {
  return ((control: AbstractControl): ValidationErrors | null  => {
    const selectedDate: Date = new Date(control.value);
    let errors: ValidationErrors = {};

    [
      () => selectedDate < min ? 'mindate' : null,
      () => selectedDate > max ? 'maxdate' : null,
    ].forEach(action => {
      let validationResult = action();
      if (validationResult !== null) {
        errors[validationResult] = {
          value: selectedDate,
          minDate: min,
          maxDate: max
        };
      }
    });
    return Object.values(errors).length ? errors : null;
  });
}

// export class BirthValidator {
//   validate(min: Date, max: Date): ValidatorFn {
//     return ((control: AbstractControl): ValidationErrors | null  => {
//       const selectedDate: Date = new Date(control.value);
//       let errors: ValidationErrors = {};
//
//       [
//         () => selectedDate < min ? 'mindate' : null,
//         () => selectedDate > max ? 'maxdate' : null,
//       ].forEach(action => {
//         let validationResult = action();
//         if (validationResult !== null) {
//           errors[validationResult] = {
//             value: selectedDate,
//             minDate: min,
//             maxDate: max
//           };
//         }
//       });
//       return Object.values(errors).length ? errors : null;
//     });
//   }
// }
