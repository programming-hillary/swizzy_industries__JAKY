import { inject, Injectable } from '@angular/core';
import { UserService } from '../../users/user-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  userService: UserService = inject(UserService)

  router: Router = inject(Router)

  tokenExpirationTimer: any

  handleLogout() {
    this.userService.createdUser.next(null)
    this.router.navigate(['home'])
    localStorage.removeItem('user')

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer)
    }

    this.tokenExpirationTimer = null
  }

  handleAutoLogout(expirationTimer: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.handleLogout()
    }, expirationTimer)
  }
}
