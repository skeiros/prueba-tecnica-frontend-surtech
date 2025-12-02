import { Component, Input } from "@angular/core";
import { UserModel } from "../../models/user.model";
import { MaterialModule } from "../../material/materia.module";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-summary",
  imports: [MaterialModule, CommonModule, TranslatePipe, TranslateModule],
  templateUrl: "./summary.component.html",
  styleUrl: "./summary.component.css",
})
export class SummaryComponent {
  @Input() data: UserModel | null = null;
}
