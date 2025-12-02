import { Component } from "@angular/core";
import { MaterialModule } from "../material/materia.module";
import Swal from "sweetalert2";
import { NgxMaskDirective } from "ngx-mask";
import {
  TranslateService,
  TranslatePipe,
  TranslateModule,
} from "@ngx-translate/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-register",
  imports: [
    CommonModule,
    MaterialModule,
    NgxMaskDirective,
    TranslatePipe,
    TranslateModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private translate: TranslateService, private fb: FormBuilder) {
      this.registerForm = this.fb.group({
        fullname: ["", Validators.required],
        email: ["", Validators.required],
        phone_prefix: ["", Validators.required],
        phone_number: ["", Validators.required],
        date_of_birth: ["", Validators.required],
        password: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        country: ["", Validators.required],
      });
  }
  submitForm() {
    if (this.registerForm.valid) {
      this.showAlert();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
  showAlert() {
    Swal.fire("Success!", "Your operation was successful.", "success");
  }
}
