import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordStrengthValidator(
  control: AbstractControl
): ValidationErrors | null {
  const password = control.value;

  if (!password) return null;

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const isValid =
    password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;

  return isValid ? null : { passwordStrength: true };
}
