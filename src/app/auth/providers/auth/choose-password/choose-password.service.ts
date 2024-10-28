import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, defer } from 'rxjs';
import { ErrorHandlerService } from '../errors/error-handler.service';
import { NewPasswordResponse } from '../../../models/auth/NewPasswordResponse';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChoosePasswordService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  fireAuth: AngularFireAuth = inject(AngularFireAuth)

  handleNewPasswordCreation(password: string, oobCode: string) {
    const formData = {
      password: password,
      oobCode: oobCode
    };

    console.log(formData)

    return this.http
      .post<NewPasswordResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=' + environment.firebaseConfig.apiKey,
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err);
        })
      )

    // return defer(() =>
    //   this.fireAuth.confirmPasswordReset(oobCode, password)
    // ).pipe(
    //   catchError((err) => {
    //     return this.errorsService.handleAuthenticationErrors(err)
    //   })
    // )
  }
}
