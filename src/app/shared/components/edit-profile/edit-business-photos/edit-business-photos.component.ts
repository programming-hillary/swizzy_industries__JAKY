import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { UploadBusinessTaskComponent } from './upload-business-task/upload-business-task.component'
import { faCloudArrowUp, faImages } from '@fortawesome/free-solid-svg-icons'
import { DropzoneDirective } from '../../../directives/dropzone/dropzone.directive'

@Component({
  selector: 'app-edit-business-photos',
  standalone: true,
  imports: [
    UploadBusinessTaskComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    DropzoneDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './edit-business-photos.component.html',
  styleUrl: './edit-business-photos.component.scss',
})
export class EditBusinessPhotosComponent {

  faImages = faImages
  faUpload = faCloudArrowUp

  isHoveringBusiness!: boolean
  isInUploadStateBusiness: boolean = false

  filesBusiness: File[] = []
  outputFilesBusiness: any[] = []

  toggleHoverBusiness($event: any) {
    this.isHoveringBusiness = $event
  }

  clearPhotosBusiness() {
    this.filesBusiness = []

    this.outputFilesBusiness = []
  }

  displayPhotosFromInputBusiness(event: any) {
    const files = event.target.files

    for (let i = 0; i < files.length; i++) {
      const file = files.item(i)

      this.filesBusiness.push(file)

      const reader = new FileReader()
      reader.onload = () => {
        this.outputFilesBusiness.push(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  displayPhotosBusiness(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.filesBusiness.push(files.item(i)!)
    }
  }

  submitPhotosBusiness() {
    if(this.filesBusiness.length > 0) {
      this.isInUploadStateBusiness = true
    }
  }
}
