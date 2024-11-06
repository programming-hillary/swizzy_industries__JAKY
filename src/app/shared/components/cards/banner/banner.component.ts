import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core'
import { MatButtonModule} from '@angular/material/button'
import { MatIconModule} from '@angular/material/icon'
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  loops: number[] = [1,2,3,4,5];
}
