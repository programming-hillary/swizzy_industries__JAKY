import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
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
import { MatDividerModule } from '@angular/material/divider'

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
  faEnvelope,
  faUnlockKeyhole,
} from '@fortawesome/free-solid-svg-icons'

import { ErrorStateMatcher } from '@angular/material/core'
import { SignUpService } from '../../providers/auth/sign-up/sign-up.service'

import { MiniLoaderComponent } from '../../../shared/components/loading/mini-loader/mini-loader.component'
import { OAuthComponent } from "../../../shared/components/auth/o-auth/o-auth.component";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(control && control.invalid && (control.dirty))
  }
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    FontAwesomeModule,
    MiniLoaderComponent,
    OAuthComponent
],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  faPassword = faUnlockKeyhole
  faMail = faEnvelope

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
  router: Router = inject(Router)
  private _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  signUpService: SignUpService = inject(SignUpService)

  isLoading: boolean = false

  register_form: FormGroup<{
    password: FormControl<string>
    confirmPassowrd: FormControl<string>
    email: FormControl<string>
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassowrd: ['', [Validators.required, Validators.minLength(6)]],
  })

  matcher = new MyErrorStateMatcher()
  durationInSeconds: number = 3

  submitForm(form: any): void {
    if (this.register_form.valid) {
      this.isLoading = true

      this.signUpService
        .handleEmailPasswordSignUp(
          this.register_form.value.email!,
          this.register_form.value.password!
        )
        .subscribe({
          next: (res) => {
            this.isLoading = false
          },
          error: (errMsg: string) => {
            this._snackBar.open(errMsg, 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000
            })
            this.isLoading = false
          },
        })

      form.reset()
    } else {
      Object.values(this.register_form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  signInBtnClicked() {
    this.router.navigate(['auth'])
  }
}
