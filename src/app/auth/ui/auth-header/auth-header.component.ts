import { Component, inject, OnInit, signal } from '@angular/core'
import { Location, CommonModule } from '@angular/common'

import { ThemeManagerService } from '../../../shared/services/themes/theme-provider/theme-manager.service'

import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faMoon, faSun, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FontAwesomeModule
  ],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent implements OnInit {
  isLoginMode!: string

  faDarkMode = faMoon
  faLightMode = faSun
  faSystemMode = faWandMagicSparkles

  urlLocation: Location = inject(Location)

  ngOnInit(): void {
    if (this.urlLocation.path() == '/auth/sign-up') {
      this.isLoginMode = 'sign up'
    }
    if (this.urlLocation.path() == '/auth/sign-in') {
      this.isLoginMode = 'sign in'
    }
    if (this.urlLocation.path() == '/auth/edit-profile') {
      this.isLoginMode = 'edit profile'
    }
    if (this.urlLocation.path() == '/auth/forgot-password') {
      this.isLoginMode = 'forgot password'
    }
    if (this.urlLocation.path() == '/auth/email-redirect?mode=resetPassword') {
      this.isLoginMode = 'create new password'
    }
    if (this.urlLocation.path() == '/auth/email-sent') {
      this.isLoginMode = 'Email sent'
    }
    if (this.urlLocation.path() == '/auth/registration-success') {
      this.isLoginMode = 'registration successful'
    }
    if (this.urlLocation.path() == '/auth/password-reset-success') {
      this.isLoginMode = 'password has been reset'
    }

    this.urlLocation.onUrlChange((url: string, state: unknown) => {
      if (url == '/auth/sign-up') {
        this.isLoginMode = 'sign up'
      }
      if (url == '/auth/sign-in') {
        this.isLoginMode = 'sign in'
      }
      if (url == '/auth/edit-profile') {
        this.isLoginMode = 'edit profile'
      }
      if (url == '/auth/forgot-password') {
        this.isLoginMode = 'forgot password'
      }
      if (url == '/auth/email-redirect?mode=resetPassword') {
        this.isLoginMode = 'create new password'
      }
      if (url == '/auth/email-sent') {
        this.isLoginMode = 'Email sent'
      }
      if (url == '/auth/registration-success') {
        this.isLoginMode = 'registration successful'
      }
      if (url == '/auth/password-reset-success') {
        this.isLoginMode = 'password has been reset'
      }
    })
  }

  themeManager = inject(ThemeManagerService);
  isDark$ = this.themeManager.isDark$;

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme);
  }
}
