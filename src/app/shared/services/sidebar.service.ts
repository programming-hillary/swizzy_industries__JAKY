import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sidebarToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  sidebarToggled(event: any) {
    this.sidebarToggle.emit(event)
  }
}
