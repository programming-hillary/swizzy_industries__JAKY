import { RouterModule } from '@angular/router';
import { Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faInstagram,
  faYoutube,
  faXTwitter,
  faLinkedinIn,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  sidebarService: SidebarService = inject(SidebarService);

  faPhone = faPhone;
  faMenu = faBars;

  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;

  onToggleDrawer(event: any) {
    console.log("header toggle drawer")
    this.sidebarService.sidebarToggled(event);
  }
}
