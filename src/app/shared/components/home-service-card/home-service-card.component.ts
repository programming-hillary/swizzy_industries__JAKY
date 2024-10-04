import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-service-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home-service-card.component.html',
  styleUrl: './home-service-card.component.scss'
})
export class HomeServiceCardComponent {
faDumbbell = faDumbbell
}
