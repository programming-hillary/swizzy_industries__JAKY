import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import { Router } from '@angular/router'
import { LoginService } from '../../providers/auth/login/login.service'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'
import { MyErrorStateMatcher } from '../sign-up/sign-up.component'

@Component({
  selector: 'app-verify-email',
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
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss'
})
export class VerifyEmailComponent {

  router: Router = inject(Router)

  signInBtnClicked() {
    this.router.navigate(['auth', 'sign-in'])
  }

  signUpBtnClicked() {
    this.router.navigate(['auth', 'sign-up'])
  }
}
