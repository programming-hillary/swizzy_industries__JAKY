import { inject, Injectable } from '@angular/core'
import { User } from '../../../models/users/user'
import { UserService } from '../../users/user-service.service'

@Injectable({
  providedIn: 'root'
})
export class AutoLoginService {

  userCreated: UserService = inject(UserService)

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

        this.userCreated.createdUser.next(authenticatedUser)

        this.userCreated.handleAutoLogout(timerValue)
      }
    }
  }
}
