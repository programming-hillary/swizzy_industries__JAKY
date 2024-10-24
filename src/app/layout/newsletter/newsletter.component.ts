import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

}
