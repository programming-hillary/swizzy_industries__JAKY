import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent } from './layout/layout.component'
import { AuthComponent } from './auth/ui/auth.component'
import { LoginComponent } from './auth/ui/login/login.component'
import { ProfileEditComponent } from './auth/ui/profile-edit/profile-edit.component'
import { SignUpComponent } from './auth/ui/sign-up/sign-up.component'
import { homeAuthGuardGuard } from './auth/guards/can-activate-home/home-auth-guard.guard'
import { ForgotPasswordComponent } from './auth/ui/forgot-password/forgot-password.component'
import { RegisterSuccessComponent } from './auth/ui/register-success/register-success.component'
import { PasswordResetSuccessComponent } from './auth/ui/password-reset-success/password-reset-success.component'
import { ChoosePasswordComponent } from './auth/ui/choose-password/choose-password.component'
import { EmailRedirectComponent } from './auth/ui/email-redirect/email-redirect.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { VerifyEmailComponent } from './auth/ui/verify-email/verify-email.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [homeAuthGuardGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
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
        component: ForgotPasswordComponent
      },
      {
        path: 'email-sent',
        component: VerifyEmailComponent
      },
      {
        path: 'registration-success',
        component: RegisterSuccessComponent
      },
      {
        path: 'email-redirect',
        component: EmailRedirectComponent
      },
      {
        path: 'password-reset-success',
        component: PasswordResetSuccessComponent
      }
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]
