import { Component, inject } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-register-success',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FontAwesomeModule,
  ],
  templateUrl: './register-success.component.html',
  styleUrl: './register-success.component.scss'
})
export class RegisterSuccessComponent {

  router: Router = inject(Router)
  faCircleCheck = faCircleCheck

  profileBtnClicked() {
    this.router.navigate(['auth', 'edit-profile'])
  }

  homeBtnClicked() {
    this.router.navigate(['/'])
  }
}
