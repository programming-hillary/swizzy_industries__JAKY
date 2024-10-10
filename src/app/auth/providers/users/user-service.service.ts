import { inject, Injectable } from '@angular/core'
import { User } from '../../models/users/user'
import { BehaviorSubject, Subject } from 'rxjs'
import { AutoLogout } from '../auth/auto-logout/auto-logout.service'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  createdUser = new BehaviorSubject<User | null>(null)

  autoLogout: AutoLogout = inject(AutoLogout)

  handleCreateUser(res: any) {
    const expiresIn = new Date().getTime() + +res.expiresIn * 1000
    const expiresInTimeStamp = new Date(expiresIn)

    const user = new User(res.email, res.localId, res.idToken, expiresInTimeStamp)

    this.createdUser.next(user)

    this.autoLogout.handleAutoLogout(res._expiresIn)

    localStorage.setItem('user', JSON.stringify(user))
  }
}
