import { Component, inject, ViewChild } from '@angular/core'
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
import { MatSelectModule } from '@angular/material/select'
import { MatStepperModule } from '@angular/material/stepper'
import { Router } from '@angular/router'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { GoogleMapsModule } from '@angular/google-maps'

import { faEdit, faLongArrowAltLeft, faLongArrowAltRight, faWarning } from '@fortawesome/free-solid-svg-icons'
import { EditPersonalDetailsComponent } from "../../../shared/components/edit-personal-details/edit-personal-details.component"
import { MyErrorStateMatcher } from '../sign-up/sign-up.component'

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    FontAwesomeModule,
    GoogleMapsModule,
    EditPersonalDetailsComponent
],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  faLongArrowAltRight = faLongArrowAltRight
  faLongArrowAltLeft = faLongArrowAltLeft
  faWarning = faWarning
  faEdit = faEdit

  matcher = new MyErrorStateMatcher()

  isEditable = true
  stepsCompleted: [] = []

  private _formBuilder: FormBuilder = inject(FormBuilder)
  router: Router = inject(Router)

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
  businessDetails: FormGroup = this._formBuilder.group({
    businessName: ['', [Validators.required]],
    popularName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    category: ['', [Validators.required]],
    city: ['', [Validators.required]],
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    location: ['', [Validators.required]],
    socialMediaLinks: ['', [Validators.required]],
  })
  photosDetails: FormGroup = this._formBuilder.group({  })


  center: google.maps.LatLngLiteral = {
    lat: 0,
    lng: 0
  }

  zoom: number = 5

  display: any

  moveMapMarker(event: google.maps.MapMouseEvent|google.maps.IconMouseEvent) {
    if(event.latLng != null) this.center = (event.latLng.toJSON())
  }

  maphover(event: google.maps.MapMouseEvent) {
    if(event.latLng != null) this.display = (event.latLng.toJSON)
  }

  submitProfileEdits() {

    if (this.personalDetails.valid) {
      console.log('valid');

      console.log(this.personalDetails);

      // this.logingService
      //   .handleEmailPasswordSignIn(
      //     this.login_form.value.email!,
      //     this.login_form.value.password!
      //   )
      //   .subscribe({
      //     next: (res) => {
      //       this.router.navigate(['/'])
      //       this.isLoading = false
      //     },
      //     error: (errMsg: string) => {
      //       this._snackBar.open(errMsg, 'Close', {
      //         horizontalPosition: this.horizontalPosition,
      //         verticalPosition: this.verticalPosition,
      //         duration: this.durationInSeconds * 1000
      //       })

      //       this.isLoading = false
      //     }
      //   })
    } else {
      Object.values(this.personalDetails.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  proceedToHome() {
    this.router.navigate(['/'])
  }
}
