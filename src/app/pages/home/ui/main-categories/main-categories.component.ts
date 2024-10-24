import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faArrowRight, faEnvelope, faPhoneAlt, faMapMarkerAlt, faQuoteRight, faDumbbell, faGlassCheers, faSwimmer, faSpa, faUtensils, faHotel, faBed, faBath, faWifi, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { HomeCategoryCardComponent } from "../../../../shared/components/cards/home-category-card/home-category-card.component";

@Component({
  selector: 'app-main-categories',
  standalone: true,
  imports: [FontAwesomeModule, HomeCategoryCardComponent],
  templateUrl: './main-categories.component.html',
  styleUrl: './main-categories.component.scss'
})
export class MainCategoriesComponent {
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
