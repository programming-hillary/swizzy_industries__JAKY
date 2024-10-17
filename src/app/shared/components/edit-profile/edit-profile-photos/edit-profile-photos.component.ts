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
  Validators,
  FormArray,
} from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatStepperModule } from '@angular/material/stepper'

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

  photosDetails: FormGroup = this._formBuilder.group({
    personalPhotos: this._formBuilder.array([]),
    businessPhotos: this._formBuilder.array([]),
  })

  imageWidth = signal(0)
  @Input({ required: true }) set width(val: number) {
    this.imageWidth.set(val)
  }

  imageHeight = signal(0)
  @Input({ required: true }) set height(val: number) {
    this.imageHeight.set(val)
  }

  personalImages = signal('')
  @Input({ required: true }) set personalImagePath(val: string) {
    this.personalImages.set(val)
  }

  businessImages = signal('')
  @Input({ required: true }) set businessImagePath(val: string) {
    this.personalImages.set(val)
  }

  placeholder = computed(
    () => `https://img.freepik.com/free-vector/image-upload-concept-illustration_23-2148281796.jpg?t=st=1729078525~exp=1729082125~hmac=4bffcf14c27bbcf4926a639dd226ff768c142f243d10c3a99031798fd6168550/${this.imageWidth()}X${this.imageHeight()}`
  )

  personalImageURL = signal<string | undefined>(undefined)
  businessImageURL = signal<string | undefined>(undefined)

  personalImageSource = computed(() => {
    return this.personalImageURL() ?? this.placeholder()
  })

  businessImageSource = computed(() => {
    return this.businessImageURL() ?? this.placeholder()
  })

  personalImagesUploading = signal(false)
  businessImagesUploading = signal(false)

  dialog = inject(MatDialog)

  personalFileSelected(event: any) {
    let files: [] = event.target.file

    if (event.target.file){
      for(let i = 0; i < files.length; i++) {
        const file = event.target.files[i]
        this.uploadPersonalImages(file)
      }
    }
  }

  businessFileSelected(event: any) {
    let files: [] = event.target.file

    if (event.target.file){
      for(let i = 0; i < files.length; i++) {
        const file = event.target.files[i]
        this.uploadBusinessImages(file)
      }
    }
  }

  @Output() imageReady = new EventEmitter<string>()

  constructor() {
    effect(() => {
      if (this.personalImageURL()) {
        this.imageReady.emit(this.personalImageURL())
      }
    });

    effect(() => {
      if (this.businessImageURL()) {
        this.imageReady.emit(this.businessImageURL())
      }
    });
  }

  storage = inject(Storage)
  zone = inject(NgZone)

  async uploadPersonalImages(blob: Blob) {
    this.personalImagesUploading.set(true)
    const storageRef = ref(this.storage, this.personalImages())
    const uploadTask = await uploadBytes(storageRef, blob)
    const downloadUrl = await getDownloadURL(uploadTask.ref)
    this.personalImageURL.set(downloadUrl)
    this.personalImagesUploading.set(false)
  }

  async uploadBusinessImages(blob: Blob) {
    this.businessImagesUploading.set(true)
    const storageRef = ref(this.storage, this.businessImages())
    const uploadTask = await uploadBytes(storageRef, blob)
    const downloadUrl = await getDownloadURL(uploadTask.ref)
    this.businessImageURL.set(downloadUrl)
    this.businessImagesUploading.set(false)
  }

  personalPhotoArray(): FormArray {
    return this.photosDetails.get('personalPhotos') as FormArray
  }

  addPersonalPhoto() {
    const personalPhoto = this._formBuilder.group({
      name: this.businessImageURL
    })

    this.personalPhotoArray().push(personalPhoto)
  }

  businessPhotoArray(): FormArray {
    return this.photosDetails.get('businessPhotos') as FormArray
  }

  addBusinessPhoto() {
    const businessPhoto = this._formBuilder.group({
      name: this.businessImageURL
    })

    this.businessPhotoArray().push(businessPhoto)
  }

  submitPhotoDetails() {
    console.log(this.photosDetails)
  }
}
