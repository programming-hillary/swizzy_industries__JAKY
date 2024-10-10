import { RouterModule } from '@angular/router'
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
import { faPhone, faBars, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { SidebarService } from '../../shared/services/sidebar.service'
import { UserService } from '../../auth/providers/users/user-service.service'
import { User } from '../../auth/models/users/user'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {

  faPhone = faPhone
  faMenu = faBars
  faUser = faUserCircle

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

  ngOnInit(): void {
    this.userSubscription = this.userService.createdUser.subscribe(
      (user) => {
        if(user) {
          this.userName = user.email
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      }
    )
  }

  onToggleDrawer(event: any) {
    this.sidebarService.sidebarToggled(event)
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe()
  }
}
