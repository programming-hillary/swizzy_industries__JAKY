import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'
import { UploadBusinessTaskComponent } from './upload-task/upload-task.component'

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
  ],
  templateUrl: './edit-business-photos.component.html',
  styleUrl: './edit-business-photos.component.scss',
})
export class EditBusinessPhotosComponent {
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
