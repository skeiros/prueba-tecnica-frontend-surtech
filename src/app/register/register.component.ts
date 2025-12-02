import { Component } from "@angular/core";
import { MaterialModule } from "../material/materia.module";
import Swal from "sweetalert2";
import { NgxMaskDirective } from "ngx-mask";
import {
  TranslateService,
  TranslatePipe,
  TranslateModule,
} from "@ngx-translate/core";
@Component({
  selector: "app-register",
  imports: [MaterialModule, NgxMaskDirective, TranslatePipe, TranslateModule],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.css",
})
export class RegisterComponent {
  constructor(private translate: TranslateService) {}
  showAlert() {
    Swal.fire("Success!", "Your operation was successful.", "success");
  }
}
