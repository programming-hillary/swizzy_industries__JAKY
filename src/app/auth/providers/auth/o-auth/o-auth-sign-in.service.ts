import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { UserService } from '../../users/user-service.service'
import { catchError, defer, tap } from 'rxjs'
import { IOAuthSignInResponse } from '../../../models/auth/OAuthSigInResponse'
import { FacebookAuthProvider, GoogleAuthProvider } from '@angular/fire/auth'
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
    const formData = {
      requestUri: '',
      postBody: '',
      returnSecureToken: true,
      returnIdpCredential: true
    }

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

    // return defer(() =>
    //   this.fireAuth.signInWithPopup(new GoogleAuthProvider())
    // ).pipe(
    //   catchError((err) => {
    //     return this.errorsService.handleAuthenticationErrors(err)
    //   }),
    //   tap((res) => localStorage.setItem('jaky-google-user', JSON.stringify(res.user)))
    // )
  }

  handleFacebookSignIn() {
    const formData = {
        requestUri: '',
        postBody: '',
        returnSecureToken: true,
      returnIdpCredential: true
    }
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

    // return defer(() =>
    //   this.fireAuth.signInWithPopup(new FacebookAuthProvider())
    // ).pipe(
    //   catchError((err) => {
    //     return this.errorsService.handleAuthenticationErrors(err)
    //   }),
    //   tap((res) => localStorage.setItem('jaky-facebook-user', JSON.stringify(res.user)))
    // )
  }
}
