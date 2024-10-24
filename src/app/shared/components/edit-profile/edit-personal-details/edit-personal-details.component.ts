import { Component, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatStepperModule } from '@angular/material/stepper'

import { MyErrorStateMatcher } from '../../../../auth/ui/sign-up/sign-up.component'
import { PersonalDetailsService } from '../../../../auth/providers/personal-info/personal-details.service'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'

@Component({
  selector: 'app-edit-personal-details',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatStepperModule
  ],
  templateUrl: './edit-personal-details.component.html',
  styleUrl: './edit-personal-details.component.scss',
})
export class EditPersonalDetailsComponent {
  isEditable: boolean = true

  matcher = new MyErrorStateMatcher()
  private _formBuilder: FormBuilder = inject(FormBuilder)
  personalDetailsService: PersonalDetailsService = inject(PersonalDetailsService)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  personalDetails: FormGroup = this._formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    username: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    city: ['', [Validators.required]],
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    job: ['', [Validators.required]],
    bio: ['', [Validators.required]],
  })

  submitPersonalDetails(form: any) {
    if (this.personalDetails.valid) {
      this.personalDetailsService.publishPersonalData(this.personalDetails.value)
      .subscribe({
        next: (res) => console.log(res),

        error: (errMsg: string) => {
          this._snackBar.open(errMsg, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          })
        }
      })

      form.reset()
    } else {
      Object.values(this.personalDetails.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }
}
