import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  inject,
  Output,
} from '@angular/core';
import { IImageFile } from '../../../auth/models/images/image-file.interface';
import { DomSanitizer } from '@angular/platform-browser';

enum DropColor {
  Default = '#C6E4F1', // Default color
  Over = '#ACADAD', // Color to be used once the file is "over" the drop box
}

@Directive({
  selector: '[uploadImage]',
  standalone: true,
})
export class ImageUploaderDirective {
  @Output() dropFiles: EventEmitter<IImageFile[]> = new EventEmitter<
    IImageFile[]
  >();
  @HostBinding('style.background') backgroundColor!: string;

  sanitizer: DomSanitizer = inject(DomSanitizer)

  @HostListener('dragover', ['$event']) public dragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = DropColor.Over;
  }

  @HostListener('dragleave', ['$event']) public dragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = DropColor.Default;
  }

  @HostListener('drop', ['$event']) public drop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = DropColor.Default;

    let fileList = event.dataTransfer?.files;
    let files: IImageFile[] = [];

    for (let i = 0; i < fileList!.length; i++) {
      const file = fileList![i];
      const url = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      );

      files.push({ file, url });
    }

    if (files.length > 0) {
      this.dropFiles.emit(files);
    }
  }
}

// DRAG AND DROP COMPONENT

// <div class="container">
//     <div class="row">
//       <div class="drop-box" corpImgUpload (dropFiles)="onDropFiles($event)">
//         <span class="message">Drop File Images Here</span>
//       </div>
//     </div>
//     <div class="row">
//       <img *ngFor="let file of files" [src]="file.url" />
//     </div>
//   </div>



// .container {
//   display: flex;
//   flex-direction: column;
// }

// .drop-box {
//   min-height: 300px;
//   min-width: 300px;
//   display: table;
//   background-color: #c6e4f1;
//   border: solid 1px #75c5e7;
// }

// .row {
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
// }

// .message {
//   display: table-cell;
//   text-align: center;
//   vertical-align: middle;
//   color: #686868;
// }

// img {
//   width: 200px;
//   height: 200px;
// }



// import { Component } from '@angular/core';
// import { ImageFile } from './model/image-file';

// @Component({
//   selector: 'corp-root',
//   template: `
//     // Template go here
//   `,
//   styles: [
//     `
//       // Styles go here
//     `,
//   ],
// })
// export class AppComponent {
//   files: ImageFile[] = [];

//   onDropFiles(files: IImageFile[]): void {
//     this.files = [...this.files, ...files];
//   }
// }


