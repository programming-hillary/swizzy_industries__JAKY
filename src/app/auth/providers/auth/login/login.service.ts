import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { LoginResponse } from '../../../models/auth/LoginResponse'
import { catchError, tap } from 'rxjs'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { UserService } from '../../users/user-service.service'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  userService: UserService = inject(UserService)

  handleEmailPasswordSignIn(email: string, password: string) {
    const formData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    return this.http
      .post<LoginResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err)
        }),
        tap((res) => this.userService.handleCreateUser(res)))
  }
}
