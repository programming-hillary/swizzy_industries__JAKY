import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
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

import { ErrorStateMatcher } from '@angular/material/core'
import { Router } from '@angular/router'
import { LoginService } from '../../providers/auth/login/login.service'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'
import { MyErrorStateMatcher } from '../sign-up/sign-up.component'

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  faUser = faUser
  faPassword = faLock

  isLoading: boolean = false

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
  router: Router = inject(Router)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  logingService: LoginService = inject(LoginService)

  login_form: FormGroup<{
    email: FormControl<string>
    password: FormControl<string>
    rememberMe: FormControl<boolean>
  }> = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [true],
  })

  matcher = new MyErrorStateMatcher()

  submitForm(form: any): void {
    this.isLoading = true

    if (this.login_form.valid) {
      this.logingService
        .handleEmailPasswordSignIn(
          this.login_form.value.email!,
          this.login_form.value.password!
        )
        .subscribe({
          next: (res) => {
            this.router.navigate(['/'])
            this.isLoading = false
          },
          error: (errMsg: string) => {
            this._snackBar.open(errMsg, 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000
            })

            this.isLoading = false
          }
        })

      form.reset()
    } else {
      Object.values(this.login_form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  signUpBtnClicked() {
    this.router.navigate(['auth', 'sign-up'])
  }
}
