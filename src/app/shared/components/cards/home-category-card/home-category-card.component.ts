import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faArrowRight, faEnvelope, faPhoneAlt, faMapMarkerAlt, faQuoteRight, faDumbbell, faGlassCheers, faSwimmer, faSpa, faUtensils, faHotel, faBed, faBath, faWifi, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-category-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-category-card.component.html',
  styleUrl: './home-category-card.component.scss'
})
export class HomeCategoryCardComponent {
  faArrowUp = faArrowUp;
  faArrowRight = faArrowRight;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;
  faQuoteRight = faQuoteRight;
  faDumbell = faDumbbell;
  faGlassCheers = faGlassCheers;
  faSwimmer = faSwimmer;
  faSpa = faSpa;
  faUtensils = faUtensils;
  faHotel = faHotel;
  faBed = faBed;
  faBath = faBath;
  faWifi = faWifi;
  faUsers = faUsers;
  faUsersCog = faUsersCog;

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;
}
