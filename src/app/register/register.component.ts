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
import { CountryModel } from "../models/country.model";
import { CountryService } from "../services/country.service";
import { passwordStrengthValidator } from "../utils/validators/password-strength.validator";
import { passwordMatchValidator } from "../utils/validators/password-match.validator";
import { min } from "rxjs";
import { minAgeValidator } from "../utils/validators/min-age.validator";
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
  countries:CountryModel[] = [];
 
  
  constructor(private translate: TranslateService, private fb: FormBuilder,private countryService:CountryService) {
    this.getContries();
      this.registerForm = this.fb.group({
        fullname: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        phone_prefix: ["", [Validators.required,Validators.pattern(/^\d{2,3}$/)]],
        phone_number: ["", Validators.required],
        date_of_birth: ["", [Validators.required,minAgeValidator(18)]],
        password: ["", [Validators.required,Validators.minLength(8) ,passwordStrengthValidator]],
        confirmPassword: ["", [Validators.required]],
        country: ["", Validators.required],
      }, { validators: passwordMatchValidator }); 
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
  getContries(){
    this.countryService.getCountries().subscribe((response:any)=>{
        if(response.success){
            this.countries = response.countries.map((countryData:any) => new CountryModel(countryData));
        }
    });
  }
}
