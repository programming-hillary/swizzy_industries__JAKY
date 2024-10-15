import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { filter } from 'rxjs/operators'
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'
import {
  CropperDialogResult,
  UploadDialogComponent,
} from './upload-dialog/upload-dialog.component'

@Component({
  selector: 'app-edit-profile-photos',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit-profile-photos.component.html',
  styleUrl: './edit-profile-photos.component.scss',
})
export class EditProfilePhotosComponent {
  private _formBuilder: FormBuilder = inject(FormBuilder)

  photosDetails: FormGroup = this._formBuilder.group({})

  imageWidth = signal(0)
  @Input({ required: true }) set width(val: number) {
    this.imageWidth.set(val)
  }

  imageHeight = signal(0)
  @Input({ required: true }) set height(val: number) {
    this.imageHeight.set(val)
  }

  imagePath = signal('')
  @Input({ required: true }) set path(val: string) {
    this.imagePath.set(val)
  }

  placeholder = computed(
    () => `https://placehold.co/${this.imageWidth()}X${this.imageHeight()}`
  )

  croppedImageURL = signal<string | undefined>(undefined)

  imageSource = computed(() => {
    return this.croppedImageURL() ?? this.placeholder()
  })

  uploading = signal(false)

  dialog = inject(MatDialog)

  personalFileSelected(event: any) {
    const file = event.target?.files[0]
    if (file) {
      const dialogRef = this.dialog.open(UploadDialogComponent, {
        data: {
          image: file,
          width: this.imageWidth(),
          height: this.imageHeight(),
        },
        width: '300px',
      })

      dialogRef
        .afterClosed()
        .pipe(filter((result) => !!result))
        .subscribe((result: CropperDialogResult) => {
          this.uploadPersonalImages(result.blob)
        })
    }
  }

  businessFileSelected(event: any) {
    const file = event.target?.files[0]
    if (file) {
      const dialogRef = this.dialog.open(UploadDialogComponent, {
        data: {
          image: file,
          width: this.imageWidth(),
          height: this.imageHeight(),
        },
        width: '300px',
      })

      dialogRef
        .afterClosed()
        .pipe(filter((result) => !!result))
        .subscribe((result: CropperDialogResult) => {
          this.uploadBusinessImages(result.blob)
        })
    }
  }

  @Output() imageReady = new EventEmitter<string>()

  constructor() {
    effect(() => {
      if (this.croppedImageURL()) {
        this.imageReady.emit(this.croppedImageURL())
      }
    })
  }

  storage = inject(Storage)
  zone = inject(NgZone)

  async uploadPersonalImages(blob: Blob) {
    this.uploading.set(true)
    const storageRef = ref(this.storage, this.imagePath())
    const uploadTask = await uploadBytes(storageRef, blob)
    const downloadUrl = await getDownloadURL(uploadTask.ref)
    this.croppedImageURL.set(downloadUrl)
    this.uploading.set(false)
  }

  async uploadBusinessImages(blob: Blob) {
    this.uploading.set(true)
    const storageRef = ref(this.storage, this.imagePath())
    const uploadTask = await uploadBytes(storageRef, blob)
    const downloadUrl = await getDownloadURL(uploadTask.ref)
    this.croppedImageURL.set(downloadUrl)
    this.uploading.set(false)
  }
}
