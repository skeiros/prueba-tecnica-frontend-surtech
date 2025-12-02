import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { MaterialModule } from "../material/materia.module";
import Swal from "sweetalert2";
import { NgxMaskDirective } from "ngx-mask";
import {
  TranslateService,
  TranslatePipe,
  TranslateModule,
} from "@ngx-translate/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CountryModel } from "../models/country.model";
import { CountryService } from "../services/country.service";
import { passwordStrengthValidator } from "../utils/validators/password-strength.validator";
import { passwordMatchValidator } from "../utils/validators/password-match.validator";
import { min } from "rxjs";
import { minAgeValidator } from "../utils/validators/min-age.validator";
import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";
import { SummaryComponent } from "./summary/summary.component";
@Component({
  selector: "app-register",
  imports: [
    CommonModule,
    MaterialModule,
    NgxMaskDirective,
    TranslatePipe,
    TranslateModule,
    ReactiveFormsModule,
    SummaryComponent,
  ],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  registerForm: FormGroup;
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  countries: CountryModel[] = [];
  currentUser: UserModel | null = null;

  @ViewChild("userSummary") userSummary!: TemplateRef<any>;

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private countryService: CountryService,
    private userService: UserService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.getContries();
    this.registerForm = this.fb.group(
      {
        fullname: ["", [Validators.required, Validators.minLength(3)]],
        email: ["", [Validators.required, Validators.email]],
        phone_prefix: [
          "",
          [Validators.required, Validators.pattern(/^\d{2,3}$/)],
        ],
        phone_number: ["", Validators.required],
        date_of_birth: ["", [Validators.required, minAgeValidator(18)]],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(8),
            passwordStrengthValidator,
          ],
        ],
        confirmPassword: ["", [Validators.required]],
        country: ["", Validators.required],
      },
      { validators: passwordMatchValidator }
    );
  }

  submitForm() {
    if (this.registerForm.invalid) return;
    this.currentUser = new UserModel(this.registerForm.value);

    this.userService.saveUser(this.currentUser).subscribe((response: any) => {
      if (response.success) {
        this.showSuccessAlert();
        //this.registerForm.reset();
      }
    });
  }
  showSuccessAlert() {
    const html = this.viewContainerRef.createEmbeddedView(
    this.userSummary
  ).rootNodes[0];
    // add Component in text
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      html: html,
    });
  }
  getContries() {
    this.countryService.getCountries().subscribe((response: any) => {
      if (response.success) {
        this.countries = response.countries.map(
          (countryData: any) => new CountryModel(countryData)
        );
      }
    });
  }
}
