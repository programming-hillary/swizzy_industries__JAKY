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
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { Router } from '@angular/router'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'
import { MyErrorStateMatcher } from '../sign-up/sign-up.component'
import { ForgotPasswordService } from '../../providers/auth/forgot-password/forgot-password.service'
import { MiniLoaderComponent } from "../../../shared/components/loading/mini-loader/mini-loader.component";

@Component({
  selector: 'app-forgot-password',
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
    MiniLoaderComponent
],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  faMail = faEnvelope

  isLoading: boolean = false

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
  router: Router = inject(Router)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  forgotPassordService: ForgotPasswordService = inject(ForgotPasswordService)

  forgot_password_form: FormGroup<{
    email: FormControl<string>
  }> = this.fb.group({
    email: ['', [Validators.required]],
  })

  matcher = new MyErrorStateMatcher()

  submitForm(form: any): void {
    this.isLoading = true

    if (this.forgot_password_form.valid) {
      this.forgotPassordService
      .handleForgotPassword(
        this.forgot_password_form.value.email!
      )
      .subscribe({
        next: (res) => {
            this.isLoading = false
            this.router.navigate(['auth', 'email-sent'])
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
      Object.values(this.forgot_password_form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  signInBtnClicked() {
    this.router.navigate(['auth', 'sign-in'])
  }
}
