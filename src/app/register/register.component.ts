import { Component } from '@angular/core';
import { MaterialModule } from '../material/materia.module';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  imports: [MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  showAlert() {
          Swal.fire('Success!', 'Your operation was successful.', 'success');
        }
}
