import { inject, Injectable } from '@angular/core'
import { User } from '../../models/users/user'
import { BehaviorSubject } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  createdUser = new BehaviorSubject<User | null>(null)
  router: Router = inject(Router)
  private tokenExpirationTimer: any

  handleCreateUser(res: any) {
    const expiresIn = new Date().getTime() + +res.expiresIn * 1000
    const expiresInTimeStamp = new Date(expiresIn)

    const user = new User(res.email, res.localId, res.idToken, expiresInTimeStamp)

    this.createdUser.next(user)
    this.handleAutoLogout(+res.expiresIn * 1000)

    localStorage.setItem('jaky-user', JSON.stringify(user))
  }

  handleLogout() {
    this.createdUser.next(null)
    localStorage.removeItem('jaky-user')
    this.router.navigate(['auth'])

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
