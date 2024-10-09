import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faEnvelopeOpen, faLock, faUnlockKeyhole, faUser } from '@fortawesome/free-solid-svg-icons';

import { ErrorStateMatcher } from '@angular/material/core';
import { SignUpService } from '../../providers/auth/sign-up.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FontAwesomeModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  faUser = faUser;
  faPassword = faUnlockKeyhole;
  faMail = faEnvelope;

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  router: Router = inject(Router)

  signUpService: SignUpService = inject(SignUpService)

  register_form: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    confirmPassowrd: FormControl<string>;
    email: FormControl<string>;
  }> = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassowrd: ['', [Validators.required, Validators.minLength(6)]]
  });

  matcher = new MyErrorStateMatcher();

  submitForm(form: any): void {
    if (this.register_form.valid) {
      this.signUpService.handleEmailPasswordSignUp(this.register_form.value.email!, this.register_form.value.password!).subscribe({
        next: (res) => {
          console.log(res)
        },

        error: (err) => {
          console.log(err)
        }
      })

      form.reset();
    } else {
      Object.values(this.register_form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  signInBtnClicked() {
    this.router.navigate(['auth'])
  }
}
