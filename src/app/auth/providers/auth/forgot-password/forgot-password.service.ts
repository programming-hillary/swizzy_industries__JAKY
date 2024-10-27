import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ErrorHandlerService } from '../errors/error-handler.service';
import { catchError, defer, tap } from 'rxjs';
import { PasswordResetResponse } from '../../../models/auth/PasswordResetResponse';
import { UserService } from '../../users/user-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  fireAuth: AngularFireAuth = inject(AngularFireAuth)

  handleForgotPassword(emailToSendCodeTo: string) {
    // const formData = {
    //   email: emailToSendCodeTo,
    //   requestType: 'PASSWORD_RESET'
    // };

    // return this.http
    //   .post<PasswordResetResponse>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
    //     formData
    //   )
    //   .pipe(
    //     catchError((err) => {
    //       return this.errorsService.handleAuthenticationErrors(err);
    //     })
    //   );

    return defer(() =>
      this.fireAuth.sendPasswordResetEmail(emailToSendCodeTo)
    ).pipe(
      catchError((err) => {
        return this.errorsService.handleAuthenticationErrors(err)
      })
    )
  }
}
