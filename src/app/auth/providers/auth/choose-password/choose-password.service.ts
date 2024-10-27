import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, defer } from 'rxjs';
import { ErrorHandlerService } from '../errors/error-handler.service';
import { NewPasswordResponse } from '../../../models/auth/NewPasswordResponse';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ChoosePasswordService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  fireAuth: AngularFireAuth = inject(AngularFireAuth)

  handleNewPasswordCreation(password: string, oobCode: string) {
    // const formData = {
    //   password: password,
    //   oobCode: oobCode
    // };

    // console.log(formData)

    // return this.http
    //   .post<NewPasswordResponse>(
    //     'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
    //     formData
    //   )
    //   .pipe(
    //     catchError((err) => {
    //       return this.errorsService.handleAuthenticationErrors(err);
    //     })
    //   );

    return defer(() =>
      this.fireAuth.confirmPasswordReset(oobCode, password)
    ).pipe(
      catchError((err) => {
        return this.errorsService.handleAuthenticationErrors(err)
      })
    )
  }
}
