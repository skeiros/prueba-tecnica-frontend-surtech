// utils/validators/min-age.validator.ts

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minAgeValidator(minAge: number = 18): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const dob = new Date(value);
    if (isNaN(dob.getTime())) return { invalidDate: true };

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age >= minAge ? null : { minAge: { requiredAge: minAge, actualAge: age } };
  };
}
