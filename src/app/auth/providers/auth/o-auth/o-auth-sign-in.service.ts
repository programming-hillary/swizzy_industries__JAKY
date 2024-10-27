import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { UserService } from '../../users/user-service.service'
import { catchError, tap } from 'rxjs'
import { IOAuthSignInResponse } from '../../../models/auth/OAuthSigInResponse'

@Injectable({
  providedIn: 'root'
})
export class OAuthSignInService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  userService: UserService = inject(UserService)

  handleGoogleSignIn() {
    // const formData = {
    //   requestUri: '',
    //   postBody: '',
    //   returnSecureToken: true,
    //   returnIdpCredential: true
    // }

    // return this.http
    //   .post<IOAuthSignInResponse>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
    //     formData
    //   )
    //   .pipe(
    //     catchError((err) => {
    //       return this.errorsService.handleAuthenticationErrors(err)
    //     }),
    //     tap((res) => this.userService.handleCreateUser(res)))
  }

  handleFacebookSignIn() {
    // const formData = {
    //   requestUri: '',
    //   postBody: '',
    //   returnSecureToken: true,
    //   returnIdpCredential: true
    // }

    // return this.http
    //   .post<IOAuthSignInResponse>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
    //     formData
    //   )
    //   .pipe(
    //     catchError((err) => {
    //       return this.errorsService.handleAuthenticationErrors(err)
    //     }),
    //     tap((res) => this.userService.handleCreateUser(res)))
  }
}
