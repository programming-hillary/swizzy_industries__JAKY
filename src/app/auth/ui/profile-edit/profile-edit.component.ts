import { Component } from '@angular/core'
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button'

import { EditPersonalDetailsComponent } from '../../../shared/components/edit-profile/edit-personal-details/edit-personal-details.component'
import { EditBusinessDetailsComponent } from '../../../shared/components/edit-profile/edit-business-details/edit-business-details.component'
import { EditProfilePhotosComponent } from '../../../shared/components/edit-profile/edit-profile-photos/edit-profile-photos.component'
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    MatStepperModule,
    EditPersonalDetailsComponent,
    EditBusinessDetailsComponent,
    EditProfilePhotosComponent,
    MatButtonModule
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  isEditable = true

  personalDetails!: AbstractControl<any, any>
  businessDetails!: AbstractControl<any, any>
  photosDetails!: AbstractControl<any, any>

  proceedToHome() {
    console.log('Going Home')
  }
}
