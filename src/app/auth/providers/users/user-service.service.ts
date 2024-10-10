import { inject, Injectable } from '@angular/core'
import { LoginService } from '../auth/login/login.service'
import { tap } from 'rxjs/operators'
import { User } from '../../models/users/user'
import { Subject } from 'rxjs'
import { LogoutService } from '../auth/logout/logout.service'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  createdUser = new Subject<User | null>()

  autoLogout: LogoutService = inject(LogoutService)

  handleCreateUser(res: any) {
    const expiresIn = new Date().getTime() + +res.expiresIn * 1000
    const expiresInTimeStamp = new Date(expiresIn)

    const user = new User(res.email, res.localId, res.idToken, expiresInTimeStamp)

    this.createdUser.next(user)

    this.autoLogout.handleAutoLogout(res._expiresIn)

    localStorage.setItem('user', JSON.stringify(user))
  }
}
