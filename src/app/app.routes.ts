import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './pages/auth/ui/login/login.component';
import { AuthComponent } from './pages/auth/ui/auth.component';
import { SignUpComponent } from './pages/auth/ui/sign-up/sign-up.component';
import { ProfileEditComponent } from './pages/auth/ui/profile-edit/profile-edit.component';

export const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
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
];
