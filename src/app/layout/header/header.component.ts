import { Router, RouterModule } from '@angular/router'
import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedinIn,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons'
import {
  faPhone,
  faBars,
  faEnvelope,
  faUserCircle,
  faMoon,
  faSun,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { SidebarService } from '../../shared/services/sidebar/sidebar.service'
import { UserService } from '../../auth/providers/users/user-service.service'
import { Subscription } from 'rxjs'
import { MatMenuModule } from '@angular/material/menu'
import { MatToolbarModule } from '@angular/material/toolbar'
import { ThemeManagerService } from '../../shared/services/themes/theme-provider/theme-manager.service'
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  faPhone = faPhone
  faMenu = faBars
  faUser = faUserCircle
  faDarkMode = faMoon
  faLightMode = faSun
  faSystemMode = faWandMagicSparkles

  faInstagram = faInstagram
  faEnvelope = faEnvelope
  faFacebookF = faFacebookF
  faLinkedinIn = faLinkedinIn
  faYoutube = faYoutube
  faXTwitter = faXTwitter

  isLoggedIn!: boolean
  userName: string = ''

  private userSubscription!: Subscription

  userService: UserService = inject(UserService)
  sidebarService: SidebarService = inject(SidebarService)
  router: Router = inject(Router)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  ngOnInit(): void {
    this.userSubscription = this.userService.createdUser.subscribe((user) => {
      if (user) {
        this.userName = user.email
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  }

  themeManager = inject(ThemeManagerService)
  isDark$ = this.themeManager.isDark$

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme)
  }

  onLogout() {
    this.userService.handleLogout().subscribe({
      next: () => {
        this.router.navigate(['auth'])
      },
      error: (errMsg: string) => {
        this._snackBar.open(errMsg, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000
        })
      }}
    )
  }

  onToggleDrawer(event: any) {
    this.sidebarService.sidebarToggled(event)
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }
}
