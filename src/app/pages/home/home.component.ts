import { Component, inject, OnInit } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {
  faArrowRight,
  faArrowUp,
  faBath,
  faBed,
  faDumbbell,
  faEnvelope,
  faGlassCheers,
  faHotel,
  faMapMarkerAlt,
  faPhoneAlt,
  faQuoteRight,
  faSpa,
  faSwimmer,
  faUsers,
  faUsersCog,
  faUtensils,
  faWifi,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { SidebarAccordionComponent } from '../../shared/components/cards/sidebar-accordion/sidebar-accordion.component'
import { SidebarProductsComponent } from '../../shared/components/cards/sidebar-products/sidebar-products.component'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { map } from 'rxjs'
import { Location } from '@angular/common'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
    SidebarAccordionComponent,
    SidebarProductsComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  faArrowUp = faArrowUp
  faArrowRight = faArrowRight
  faEnvelope = faEnvelope
  faPhoneAlt = faPhoneAlt
  faMapMarkerAlt = faMapMarkerAlt
  faQuoteRight = faQuoteRight
  faDumbell = faDumbbell
  faGlassCheers = faGlassCheers
  faSwimmer = faSwimmer
  faSpa = faSpa
  faUtensils = faUtensils
  faHotel = faHotel
  faBed = faBed
  faBath = faBath
  faWifi = faWifi
  faUsers = faUsers
  faUsersCog = faUsersCog

  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faYoutube = faYoutube
  faXTwitter = faXTwitter

  numbers = [1, 2, 3]

  activeRoute: Location = inject(Location)

  route!: string

  ngOnInit() {
    const url = this.activeRoute.path()

    if(url === '') {
      this.route = 'home'
    } else if (url === '/pins') {
      this.route = 'pins'
    } else if (url === '/categories') {
      this.route = 'categories'
    } else if (url === '/favourites') {
      this.route = 'favourites'
    } else {
      return
    }

    this.activeRoute.onUrlChange((path: string) => {
      if (path === '/') {
        this.route = 'home'
      } else if (path === '/pins') {
        this.route = 'pins'
      } else if (path === '/categories') {
        this.route = 'categories'
      } else if (path === '/favourites') {
        this.route = 'favourites'
      } else {
        return
      }
    })
  }
}
