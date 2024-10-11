import { inject, Injectable } from '@angular/core';
import { LogoutService } from '../logout/logout.service';

@Injectable({
  providedIn: 'root'
})
export class AutoLogout {

  tokenExpirationTimer: any

  logout: LogoutService = inject(LogoutService)

  handleAutoLogout(expirationTimer: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout.handleLogout()
    }, expirationTimer)
  }
}
