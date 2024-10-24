import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-o-auth',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: './o-auth.component.html',
  styleUrl: './o-auth.component.scss'
})
export class OAuthComponent {
  faGoogleG = faGoogle
  faFacebookF = faFacebookF
}
