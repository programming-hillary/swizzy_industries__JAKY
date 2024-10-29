import { EmailVerificationUiComponent } from './ui/email-verification-ui/email-verification-ui.component';
import { Routes } from '@angular/router';
import { AuthComponent } from './ui/auth.component';
import { EmailRedirectComponent } from './ui/email-redirect/email-redirect.component';
import { ForgotPasswordComponent } from './ui/forgot-password/forgot-password.component';
import { LoginComponent } from './ui/login/login.component';
import { PasswordResetSuccessComponent } from './ui/password-reset-success/password-reset-success.component';
import { ProfileEditComponent } from './ui/profile-edit/profile-edit.component';
import { RegisterSuccessComponent } from './ui/register-success/register-success.component';
import { SignUpComponent } from './ui/sign-up/sign-up.component';
import { VerifyEmailComponent } from './ui/verify-email/verify-email.component';
import { UnverifiedEmailComponent } from './ui/unverified-email/unverified-email.component';
import { homeAuthGuardGuard } from './guards/can-activate-home/home-auth-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
      {
        path: 'sign-in',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'edit-profile',
        component: ProfileEditComponent,
        canActivate: [homeAuthGuardGuard]
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'email-sent',
        component: VerifyEmailComponent,
      },
      {
        path: 'email-verifier',
        component: EmailVerificationUiComponent,
      },
      {
        path: 'unverified-email',
        component: UnverifiedEmailComponent,
      },
      {
        path: 'registration-success',
        component: RegisterSuccessComponent,
        canActivate: [homeAuthGuardGuard]
      },
      {
        path: 'email-redirect',
        component: EmailRedirectComponent,
      },
      {
        path: 'password-reset-success',
        component: PasswordResetSuccessComponent,
      },
    ],
  },
];
