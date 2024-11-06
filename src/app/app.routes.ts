import { Routes } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { homeAuthGuardGuard } from './auth/guards/can-activate-home/home-auth-guard.guard'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { SwizzyComponent } from './pages/swizzy/swizzy.component'
import { HelpFAQComponent } from './pages/help-f-a-q/help-f-a-q.component'
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component'
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component'

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
    path: 'swizzy',
    component: SwizzyComponent
  },
  {
    path: 'help-and-faq',
    component: HelpFAQComponent
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]
