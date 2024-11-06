import { Component } from '@angular/core';
import { BannerBookingComponent } from "../banner-booking/banner-booking.component";
import { BookingMapComponent } from "../booking-map/booking-map.component";
import { SidebarAccordionComponent } from "../../../../shared/components/cards/sidebar-accordion/sidebar-accordion.component";

@Component({
  selector: 'app-banner-carousel',
  standalone: true,
  imports: [BannerBookingComponent, BookingMapComponent, SidebarAccordionComponent],
  templateUrl: './banner-carousel.component.html',
  styleUrl: './banner-carousel.component.scss'
})
export class BannerCarouselComponent {

}
