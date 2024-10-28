import { inject, Injectable } from '@angular/core'
import { catchError, defer, tap } from 'rxjs'
import { ErrorHandlerService } from '../errors/error-handler.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../../environments/environment'
import { EmailVerificationResponse } from '../../../models/auth/EmailVerificationResponse'
import { UserService } from '../../users/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  user: UserService = inject(UserService)
  router: Router = inject(Router)

  handleEmailVerification() {
    const formData = {
      idToken: this.user.createdUser()?.token,
      requestType: "VERIFY_EMAIL"
    }

    console.log(formData)

    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + environment.firebaseConfig.apiKey,
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err)
        }),
        tap((res) => this.router.navigate(['auth', 'email-sent']))
      )
  }

  handleEmailOobVerifier(oobCode: string) {
    const formData = {
      oobCode: oobCode,
    }

    console.log(formData);

    return this.http
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + environment.firebaseConfig.apiKey,
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err)
        }),
        tap((res) => this.router.navigate(['auth', 'registration-success']))
      )
  }
}
