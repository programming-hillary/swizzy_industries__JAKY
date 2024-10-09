import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '../../models/auth/AuthResponse';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  http: HttpClient = inject(HttpClient);

  handleEmailPasswordSignUp(email: string, password: string) {
    const formData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC26hinZ31n4S3-X4Xa9DaHi4frZYkprcg',
      formData
    );
  }

  handleOAuthSignUp() {}
}
