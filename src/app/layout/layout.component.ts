import { SidebarService } from '../shared/services/sidebar/sidebar.service';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDashboard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookF, faLinkedinIn, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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

  drawerState: boolean = false;

  @ViewChild('sidenav')
  sidenav: any;

  sidebarService: SidebarService = inject(SidebarService);

  ngOnInit(): void {
    this.sidebarService.sidebarToggle.subscribe((data) => {
      this.sidenav.toggle();
    })
  }
}
