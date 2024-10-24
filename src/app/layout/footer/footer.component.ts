import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube, faXTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { NewsletterComponent } from "../newsletter/newsletter.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, NewsletterComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faMapMarkerAlt = faMapMarkerAlt;

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;
}
