import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { UserService } from '../../users/user-service.service'
import { catchError, tap } from 'rxjs'
import { IOAuthSignInResponse } from '../../../models/auth/OAuthSigInResponse'
import {
  FacebookAuthProvider,
  GoogleAuthProvider
} from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { environment } from '../../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class OAuthSignInService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  userService: UserService = inject(UserService)
  fireAuth: AngularFireAuth = inject(AngularFireAuth)

  handleGoogleSignIn() {
    console.log('start google auth')
    let googleProvider = GoogleAuthProvider.PROVIDER_ID
    let idToken = GoogleAuthProvider.credential('').accessToken

    const formData = {
      requestUri: 'http://localhost:4200',
      postBody: 'idToken=' + idToken + '&providerID=' + googleProvider,
      returnSecureToken: true,
      returnIdpCredential: true
    }

    console.log(formData)

    return this.http
      .post<IOAuthSignInResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=' + environment.firebaseConfig.apiKey,
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err)
        }),
        tap((res) => this.userService.handleCreateUser(res)))
  }

  handleFacebookSignIn() {
    let facebookProvider = FacebookAuthProvider.PROVIDER_ID
    let idToken = FacebookAuthProvider.credential('').accessToken

    const formData = {
      requestUri: 'http://localhost:4200',
      postBody: 'idToken=' + idToken + '&providerID=' + facebookProvider,
      returnSecureToken: true,
      returnIdpCredential: true,
    }
    return this.http
      .post<IOAuthSignInResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=' +
          environment.firebaseConfig.apiKey,
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err)
        }),
        tap((res) => this.userService.handleCreateUser(res))
      )
  }
}
