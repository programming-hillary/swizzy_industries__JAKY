import { inject, Injectable } from '@angular/core'
import { User } from '../../models/users/user'
import { BehaviorSubject, catchError, defer } from 'rxjs'
import { Router } from '@angular/router'
import { ErrorHandlerService } from '../auth/errors/error-handler.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  fireAuth: AngularFireAuth = inject(AngularFireAuth)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  router: Router = inject(Router)

  createdUser = new BehaviorSubject<User | null>(null)
  private tokenExpirationTimer: any

  handleCreateUser(res: any) {
    const expiresIn = new Date().getTime() + +res.expiresIn * 1000
    const expiresInTimeStamp = new Date(expiresIn)

    const user = new User(
      res.email,
      res.localId,
      res.idToken,
      expiresInTimeStamp
    )

    this.createdUser.next(user)
    this.handleAutoLogout(+res.expiresIn * 1000)

    localStorage.setItem('jaky-user', JSON.stringify(user))
  }

  handleLogout() {
    this.createdUser.next(null)
    localStorage.removeItem('jaky-user')

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer)
    }

    this.tokenExpirationTimer = null

    // return defer(() => this.fireAuth.signOut()).pipe(
    //   catchError((err) => {
    //     return this.errorsService.handleAuthenticationErrors(err)
    //   })
    // )
  }

  handleAutoLogout(expirationTimer: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.handleLogout()
    }, expirationTimer)
  }

  handleAutoLogin() {
    const user = JSON.parse(localStorage.getItem('jaky-user')!)

    if(!user) {
      return
    } else {
      const authenticatedUser = new User(
        user.email,
        user.id,
        user._token,
        user._expiresIn
      )

      if(authenticatedUser.token) {
        const timerValue = user._expiresIn.getTime() - new Date().getTime()

        this.createdUser.next(authenticatedUser)

        this.handleAutoLogout(timerValue)
      }
    }
  }
}
