import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { ErrorHandlerService } from '../errors/error-handler.service';
import { NewPasswordResponse } from '../../../models/auth/NewPasswordResponse';

@Injectable({
  providedIn: 'root'
})
export class ChoosePasswordService {
  http: HttpClient = inject(HttpClient)
  errorsService: ErrorHandlerService = inject(ErrorHandlerService)

  handleNewPasswordCreation(password: string, oobCode: string) {
    const formData = {
      password: password,
      oobCode: oobCode
    };

    console.log(formData)

    return this.http
      .post<NewPasswordResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyC6oI3m6s6a6D2F9hK37HlFUZVBPaVmLJA',
        formData
      )
      .pipe(
        catchError((err) => {
          return this.errorsService.handleAuthenticationErrors(err);
        })
      );
  }
}
