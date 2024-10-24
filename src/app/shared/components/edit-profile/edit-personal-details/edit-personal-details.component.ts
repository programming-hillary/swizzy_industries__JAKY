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

  private _formBuilder: FormBuilder = inject(FormBuilder)
  matcher = new MyErrorStateMatcher()

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

  submitPersonalDetails() {
    console.log(this.personalDetails)
  }
}
