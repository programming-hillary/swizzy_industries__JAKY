import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home-providers-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-providers-card.component.html',
  styleUrl: './home-providers-card.component.scss'
})
export class HomeProvidersCardComponent {
faFacebookF = faFacebookF;
faXTwitter = faXTwitter;
faInstagram = faInstagram;
}
