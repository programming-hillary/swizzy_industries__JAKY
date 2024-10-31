import { SidebarService } from '../shared/services/sidebar/sidebar.service';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard, faEnvelope, faMoon, faSearch, faSun, faUserCircle, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { ThemeManagerService } from '../shared/services/themes/theme-provider/theme-manager.service';
import { Subscription } from 'rxjs';
import { UserService } from '../auth/providers/users/user-service.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    NewsletterComponent,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FontAwesomeModule,
    RouterModule,
    FontAwesomeModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  faDashboard = faDashboard;
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;

  faSearch = faSearch
  faUser = faUserCircle
  faDarkMode = faMoon
  faLightMode = faSun
  faSystemMode = faWandMagicSparkles

  isLoggedIn!: boolean
  userName: string = ''

  private userSubscription!: Subscription

  userService: UserService = inject(UserService)
  sidebarService: SidebarService = inject(SidebarService)
  router: Router = inject(Router)

  drawerState: boolean = false

  @ViewChild('sidenav')
  sidenav: any;

  ngOnInit(): void {
    this.sidebarService.sidebarToggle.subscribe(() => {
      this.sidenav.toggle();
    })

    this.userSubscription = this.userService.createdUser.subscribe((user) => {
      if (user) {
        this.userName = user.email
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  }

  homeBtnClicked() {
    this.router.navigate([''])
    this.sidenav.toggle()
  }

  aboutBtnClicked() {
    this.router.navigate(['about'])
    this.sidenav.toggle()
  }

  categoriesBtnClicked() {
    this.router.navigate(['categories'])
    this.sidenav.toggle()
  }

  pinsBtnClicked() {
    this.router.navigate(['pins'])
    this.sidenav.toggle()
  }

  analyticsBtnClicked() {
    this.router.navigate(['analytics'])
    this.sidenav.toggle()
  }

  themeManager = inject(ThemeManagerService)
  isDark$ = this.themeManager.isDark$

  changeTheme(theme: string) {
    this.themeManager.changeTheme(theme)
  }

  onLogout() {
    this.userService.handleLogout()
    this.router.navigate(['auth'])
    this.sidenav.toggle()
  }

  searchBtnClicked() {
    this.router.navigate(['search'])
    this.sidenav.toggle()
  }
}
