import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export type CropperDialogData = {
  image: File;
  width: number;
  height: number;
};

export type CropperDialogResult = {
  blob: Blob;
  imageUrl: string;
};

@Component({
  selector: 'app-upload-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ImageCropperComponent
  ],
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.scss',
})
export class UploadDialogComponent {
  data: CropperDialogData = inject(MAT_DIALOG_DATA);

  result = signal<CropperDialogResult | undefined>(undefined);

  imageCropped(event: ImageCroppedEvent) {
    const { blob, objectUrl } = event;
    if (blob && objectUrl) {
      this.result.set({ blob, imageUrl: objectUrl });
    }
  }
}
