import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { AuthResponse } from '../../../models/auth/AuthResponse'
import { catchError, defer, tap, throwError } from 'rxjs'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { UserService } from '../../users/user-service.service'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { VerifyEmailService } from '../verify-email/verify-email.service'
import { environment } from '../../../../../environments/environment'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  userService: UserService = inject(UserService)
  emailVerifier: VerifyEmailService = inject(VerifyEmailService)
  router: Router = inject(Router)

  handleEmailPasswordSignUp(email: string, password: string) {
    const formData = {
      email: email,
      password: password,
      returnSecureToken: true,
    }

    return this.http
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseConfig.apiKey,
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err)
        }),
        tap((res) => {
          this.userService.handleCreateUser(res)
          this.router.navigate(['auth', 'email-verification'])
        })
      )

    // return defer(() =>
    //   this.fireAuth.createUserWithEmailAndPassword(email, password)
    // ).pipe(
    //   catchError((err) => {
    //     return this.errorsService.handleAuthenticationErrors(err)
    //   }),
    //   tap((res) => {
    //     this.userService.handleCreateUser(res)
    //     this.emailVerifier.handleEmailVerification(res.user)
    //   })
    // )
  }
}
