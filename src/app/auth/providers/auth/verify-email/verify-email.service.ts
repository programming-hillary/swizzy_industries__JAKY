import { inject, Injectable } from '@angular/core';
import { catchError, defer, tap } from 'rxjs';
import { ErrorHandlerService } from '../errors/error-handler.service';
import { Router } from '@angular/router';
import { user as fireUser } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  errorsService: ErrorHandlerService = inject(ErrorHandlerService)
  router: Router = inject(Router)

  handleEmailVerification(user: import("firebase/compat/app").default.User | null) {
    return defer(async () => user?.sendEmailVerification()).pipe(
      catchError((err) => {
        return this.errorsService.handleAuthenticationErrors(err)
      }),
      tap((res) => this.router.navigate(['auth', 'email-sent']))
    )
  }
}
