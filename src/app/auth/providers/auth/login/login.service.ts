import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { LoginResponse } from '../../../models/auth/LoginResponse'
import { catchError, defer, tap } from 'rxjs'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { UserService } from '../../users/user-service.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import { VerifyEmailService } from '../verify-email/verify-email.service'

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  userService: UserService = inject(UserService)
  fireAuth: AngularFireAuth = inject(AngularFireAuth)
  router: Router = inject(Router)
  emailVerifier: VerifyEmailService = inject(VerifyEmailService)

  handleEmailPasswordSignIn(email: string, password: string) {
    // const formData = {
    //   email: email,
    //   password: password,
    //   returnSecureToken: true,
    // }

    // return this.http
    //   .post<LoginResponse>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
    //     formData
    //   )
    //   .pipe(
    //     catchError((err) => {
    //       return this.errorsService.handleAuthenticationErrors(err)
    //     }),
    //     tap((res) => this.userService.handleCreateUser(res)))

    return defer(() =>
      this.fireAuth.signInWithEmailAndPassword(email, password)
    ).pipe(
      catchError((err) => {
        return this.errorsService.handleAuthenticationErrors(err)
      }),
      tap((res) => {
        this.userService.handleCreateUser(res)

        if(res.user?.emailVerified){
          this.router.navigate([''])
        } else {
          this.emailVerifier.handleEmailVerification(res.user)
        }
      }
    ))
  }
}
