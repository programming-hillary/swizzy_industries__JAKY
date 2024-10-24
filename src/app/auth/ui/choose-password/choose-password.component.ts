import { Component, inject, OnInit } from '@angular/core'
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
import { faCircleCheck, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import { ActivatedRoute, Router } from '@angular/router'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { MyErrorStateMatcher } from '../sign-up/sign-up.component'
import { ChoosePasswordService } from '../../providers/auth/choose-password/choose-password.service'

@Component({
  selector: 'app-choose-password',
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
  templateUrl: './choose-password.component.html',
  styleUrl: './choose-password.component.scss',
})
export class ChoosePasswordComponent implements OnInit {
  faUser = faUser
  faPassword = faLock
  faCircleCheck = faCircleCheck

  isLoading: boolean = false

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
  router: Router = inject(Router)
  activeRoute: ActivatedRoute = inject(ActivatedRoute)
  oobCode!: string

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  newPasswordService: ChoosePasswordService = inject(ChoosePasswordService)

  new_password_form: FormGroup<{
    password: FormControl<string>
    confirmPassword: FormControl<string>
  }> = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  })

  matcher = new MyErrorStateMatcher()

  ngOnInit(): void {
    this.activeRoute.queryParamMap.subscribe((data) => {
      this.oobCode = data.get('oobCode')!
    })
  }

  submitForm(form: any): void {
    this.isLoading = true

    if (
      this.new_password_form.valid &&
      this.new_password_form.controls['password'].value ===
        this.new_password_form.controls['confirmPassword'].value
    ) {
      this.newPasswordService
        .handleNewPasswordCreation(this.new_password_form.value.password!, this.oobCode)
        .subscribe({
          next: (res) => {
            this.router.navigate(['auth', 'password-reset-success'])
            this.isLoading = false
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
    } else {
      Object.values(this.new_password_form.controls).forEach((control) => {
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
