import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowUp, faBath, faBed, faDumbbell, faEnvelope, faGlassCheers, faHotel, faMapMarkerAlt, faPhoneAlt, faQuoteRight, faSpa, faSwimmer, faUsers, faUsersCog, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { BannerCarouselComponent } from "./ui/banner-carousel/banner-carousel.component";
import { BannerBookingComponent } from "./ui/banner-booking/banner-booking.component";
import { MainCategoriesComponent } from "./ui/main-categories/main-categories.component";
import { ServicesComponent } from "./ui/services/services.component";
import { PopularProvidersComponent } from "./ui/popular-providers/popular-providers.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, BannerCarouselComponent, BannerBookingComponent, MainCategoriesComponent, ServicesComponent, PopularProvidersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
