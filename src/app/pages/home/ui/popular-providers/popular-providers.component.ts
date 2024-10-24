import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faArrowRight, faEnvelope, faPhoneAlt, faMapMarkerAlt, faQuoteRight, faDumbbell, faGlassCheers, faSwimmer, faSpa, faUtensils, faHotel, faBed, faBath, faWifi, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { HomeProvidersCardComponent } from "../../../../shared/components/cards/home-providers-card/home-providers-card.component";

@Component({
  selector: 'app-popular-providers',
  standalone: true,
  imports: [FontAwesomeModule, HomeProvidersCardComponent],
  templateUrl: './popular-providers.component.html',
  styleUrl: './popular-providers.component.scss'
})
export class PopularProvidersComponent {
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
