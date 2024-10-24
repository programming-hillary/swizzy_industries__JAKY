import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faArrowRight, faEnvelope, faPhoneAlt, faMapMarkerAlt, faQuoteRight, faDumbbell, faGlassCheers, faSwimmer, faSpa, faUtensils, faHotel, faBed, faBath, faWifi, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { HomeServiceCardComponent } from "../../../../shared/components/cards/home-service-card/home-service-card.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FontAwesomeModule, HomeServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
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
