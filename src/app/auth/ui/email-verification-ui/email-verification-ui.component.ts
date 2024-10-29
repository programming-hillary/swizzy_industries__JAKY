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
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { MyErrorStateMatcher } from '../sign-up/sign-up.component'
import { MiniLoaderComponent } from '../../../shared/components/loading/mini-loader/mini-loader.component'
import { UserService } from '../../providers/users/user-service.service'
import { VerifyEmailService } from '../../providers/auth/verify-email/verify-email.service'

@Component({
  selector: 'app-email-verification-ui',
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
    MiniLoaderComponent,
  ],
  templateUrl: './email-verification-ui.component.html',
  styleUrl: './email-verification-ui.component.scss',
})
export class EmailVerificationUiComponent {
  faMail = faEnvelope

  isLoading: boolean = false

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
  router: Router = inject(Router)
  user: UserService = inject(UserService)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  sendEmailVerification: VerifyEmailService = inject(VerifyEmailService)

  verify_email_form: FormGroup<{
    email: FormControl<string>
  }> = this.fb.group({
    email: ['', [Validators.required]],
  })

  matcher = new MyErrorStateMatcher()

  submitForm(form: any): void {
    this.isLoading = true

    if (
      this.verify_email_form.valid &&
      this.verify_email_form.value.email === this.user.createdUser.value?.email
    ) {
      this.sendEmailVerification
        .handleEmailVerification()
        .subscribe({
          next: (res) => {
            this.isLoading = false
            this.router.navigate(['auth', 'email-sent'])
          },
          error: (errMsg: string) => {
            this._snackBar.open(errMsg, 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            })

            this.isLoading = false
          },
        })
      form.reset()
    } else if (this.verify_email_form.value.email != this.user.createdUser.value?.email) {
      this._snackBar.open('Enter the correct email', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      })

      this.isLoading = false
    } else {
      Object.values(this.verify_email_form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })

      this.isLoading = false
    }
  }

  signInBtnClicked() {
    this.router.navigate(['auth', 'sign-in'])
  }
}
