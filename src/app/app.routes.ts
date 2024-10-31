import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { homeAuthGuardGuard } from './auth/guards/can-activate-home/home-auth-guard.guard'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [homeAuthGuardGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/app.page-routes').then(r => r.routes)
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/app.auth-routes').then(r => r.routes)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]
