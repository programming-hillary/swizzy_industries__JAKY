import { inject, Injectable } from '@angular/core';
import { LogoutService } from '../logout/logout.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoLogout {

  tokenExpirationTimer: any

  handleAutoLogout(expirationTimer: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      localStorage.removeItem('user')
    }, expirationTimer)
  }
}
