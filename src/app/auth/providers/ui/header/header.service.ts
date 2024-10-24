import { Location as loc } from '@angular/common';
import { EventEmitter, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  location: loc = inject(loc)

  headerText: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setHeader() {


    this.headerText.emit()
  }
}
