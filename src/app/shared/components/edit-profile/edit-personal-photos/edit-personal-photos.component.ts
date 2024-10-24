import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faCloudArrowUp, faImages } from '@fortawesome/free-solid-svg-icons'

import { DropzoneDirective } from '../../../directives/dropzone/dropzone.directive'
import { UploadPersonalTaskComponent } from './upload-personal-task/upload-personal-task.component'

@Component({
  selector: 'app-edit-personal-photos',
  standalone: true,
  imports: [
    UploadPersonalTaskComponent,
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
  templateUrl: './edit-personal-photos.component.html',
  styleUrl: './edit-personal-photos.component.scss',
})
export class EditPersonalPhotosComponent {
  faImages = faImages
  faUpload = faCloudArrowUp

  isHoveringPersonal!: boolean
  isInUploadStatePersonal: boolean = false

  filesPersonal: File[] = []
  outputFilePersonal: any[] = []

  toggleHoverPersonal($event: any) {
    this.isHoveringPersonal = $event
  }

  clearPhotosPersonal() {
    this.filesPersonal = []

    this.outputFilePersonal = []
  }

  displayPhotosFromInputPersonal(event: any) {
    const files = event.target.files

    for (let i = 0; i < files.length; i++) {
      this.filesPersonal.push(files.item(i))
      const file = files.item(i)

      const reader = new FileReader()
      reader.onload = () => {
        this.outputFilePersonal.push(reader.result)
      }
      reader.readAsDataURL(files.item(i))
    }
  }

  displayPhotosPersonal(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.filesPersonal.push(files.item(i)!)
    }
  }

  submitPhotosPersonal() {
    if(this.filesPersonal.length > 0) {
      this.isInUploadStatePersonal = true
    }
  }
}
