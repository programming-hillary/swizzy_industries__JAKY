import { Component, ElementRef, inject, ViewChild } from '@angular/core'
import {
  FormArray,
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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { GoogleMapsModule } from '@angular/google-maps'

import { MyErrorStateMatcher } from '../../../../auth/ui/sign-up/sign-up.component'
import { faFacebookF, faInstagram, faSquareXTwitter, faLinkedinIn, faSnapchat, faReddit, faWhatsapp, faIntercom } from '@fortawesome/free-brands-svg-icons'
import { faAdd, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-edit-business-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    FontAwesomeModule,
    GoogleMapsModule
  ],
  templateUrl: './edit-business-details.component.html',
  styleUrl: './edit-business-details.component.scss'
})
export class EditBusinessDetailsComponent {

  @ViewChild('addSocialLinkBtn') addSocialLinkBtn!: ElementRef<HTMLButtonElement>

  faAdd = faAdd
  faDelete = faTrashAlt

  faInternet = faIntercom
  faFacebook = faFacebookF
  faInstagram = faInstagram
  faXTwitter = faSquareXTwitter
  faLinkedinIn = faLinkedinIn
  faSnapchat = faSnapchat
  faReddit = faReddit
  faWhatsapp = faWhatsapp

  matcher = new MyErrorStateMatcher()

  isEditable = true
  stepsCompleted: [] = []

  private _formBuilder: FormBuilder = inject(FormBuilder)

  businessDetails: FormGroup = this._formBuilder.group({
    businessName: ['', [Validators.required]],
    popularName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    category: ['', [Validators.required]],
    location: ['', [Validators.required]],
    socialMediaLinks: this._formBuilder.array([])
  })

  socialMediaLinksArray(): FormArray {
    return this.businessDetails.get('socialMediaLinks') as FormArray
  }

  addSocialLink() {
    const link = this._formBuilder.group({
      linkType: [],
      socialMediaLink: []
    })

    this.socialMediaLinksArray().push(link)
  }

  removeSocialLink(index: number) {
    this.socialMediaLinksArray().removeAt(index)
  }
}
