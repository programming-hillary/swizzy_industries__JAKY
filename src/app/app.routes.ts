import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent } from './layout/layout.component'
import { AuthComponent } from './auth/ui/auth.component'
import { LoginComponent } from './auth/ui/login/login.component'
import { ProfileEditComponent } from './auth/ui/profile-edit/profile-edit.component'
import { SignUpComponent } from './auth/ui/sign-up/sign-up.component'
import { homeAuthGuardGuard } from './auth/guards/can-activate-home/home-auth-guard.guard'

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
      },
    ],
  },
]
