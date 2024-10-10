import { inject, Injectable } from '@angular/core'
import { LoginService } from '../auth/login/login.service'
import { tap } from 'rxjs/operators'
import { User } from '../../models/users/user'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

  createdUser = new Subject<User>()

  handleCreateUser(res: any) {
    const expiresIn = new Date().getTime() + +res.expiresIn * 1000
    const expiresInTimeStamp = new Date(expiresIn)

    const user = new User(res.email, res.localId, res.idToken, expiresInTimeStamp)

    this.createdUser.next(user)
  }
}
