import { Component, inject, Input, OnInit } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage'

import { MatProgressSpinner } from '@angular/material/progress-spinner'

import { finalize, lastValueFrom, Observable } from 'rxjs'


@Component({
  selector: 'app-personal-upload-task',
  standalone: true,
  imports: [MatProgressSpinner],
  templateUrl: './upload-personal-task.component.html',
  styleUrl: './upload-personal-task.component.scss'
})
export class UploadPersonalTaskComponent implements OnInit {
  @Input()
  file!: File

  task!: AngularFireUploadTask

  storage: AngularFireStorage = inject(AngularFireStorage)
  db: AngularFirestore = inject(AngularFirestore)

  percentage!: Observable<number | undefined>
  snapshot!: Observable<any>
  downloadUrl!: string

  ngOnInit() {
    this.startUpload()
  }

  startUpload() {
    const path = `personal_photos/${Date.now()}_${this.file.name}`
    const ref = this.storage.ref(path)
    this.task = this.storage.upload(path, this.file)
    this.percentage = this.task.percentageChanges()
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(async() => {
        this.downloadUrl = await lastValueFrom(ref.getDownloadURL())

        this.db.collection('personal_photo_files').add( { downloadUrl: this.downloadUrl, path } )
      })
    )
  }
}
