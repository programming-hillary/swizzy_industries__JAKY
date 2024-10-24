import { Directive, EventEmitter, HostListener, Output } from '@angular/core'

@Directive({
  selector: '[appDropzone]',
  standalone: true,
})
export class DropzoneDirective {
  @Output() dropped = new EventEmitter<FileList>()
  @Output() hovered = new EventEmitter<boolean>()

  @HostListener('drop', ['$event']) onDrop($event: any) {
    $event.preventDefault()
    this.dropped.emit($event.dataTransfer.files)
    this.hovered.emit(true)
  }

  @HostListener('dragover', ['$event']) onDragOver($event: any) {
    $event.preventDefault()
    this.hovered.emit(true)
  }

  @HostListener('dragleave', ['$event']) onDragLeave($event: any) {
    $event.preventDefault()
    this.hovered.emit(false)
  }
}
