import { Component } from '@angular/core'
import { MatStepperModule } from '@angular/material/stepper'
import { MatButtonModule } from '@angular/material/button'

import { EditPersonalDetailsComponent } from '../../../shared/components/edit-profile/edit-personal-details/edit-personal-details.component'
import { EditBusinessDetailsComponent } from '../../../shared/components/edit-profile/edit-business-details/edit-business-details.component'
import { AbstractControl } from '@angular/forms'
import { EditPersonalPhotosComponent } from "../../../shared/components/edit-profile/edit-personal-photos/edit-personal-photos.component";
import { EditBusinessPhotosComponent } from "../../../shared/components/edit-profile/edit-business-photos/edit-business-photos.component";

@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [
    MatStepperModule,
    EditPersonalDetailsComponent,
    EditBusinessDetailsComponent,
    MatButtonModule,
    EditPersonalPhotosComponent,
    EditBusinessPhotosComponent
],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss',
})
export class ProfileEditComponent {
  isEditable = true

  personalDetails!: AbstractControl<any, any>
  businessDetails!: AbstractControl<any, any>
  photosDetails!: AbstractControl<any, any>
  personalPhotoDetails!: AbstractControl<any, any>
  businessPhotoDetails!: AbstractControl<any, any>

  proceedToHome() {
    console.log('Going Home')
  }
}
