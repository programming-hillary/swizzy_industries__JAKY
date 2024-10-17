import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'
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
  ],
  templateUrl: './edit-personal-photos.component.html',
  styleUrl: './edit-personal-photos.component.scss',
})
export class EditPersonalPhotosComponent {
  isHovering!: boolean

  files: File[] = []

  toggleHover($event: any) {
    this.isHovering = $event
  }

  onDrop(files: any) {
    for (let i = 0; i < files.length; i++) {
      this.files!.push(files.item(i)!)
    }
  }
}
