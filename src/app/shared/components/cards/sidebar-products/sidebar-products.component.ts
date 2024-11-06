import { Component } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faShoppingCart, faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar-products',
  standalone: true,
  imports: [FontAwesomeModule, MatCardModule, MatButtonModule, MatChipsModule],
  templateUrl: './sidebar-products.component.html',
  styleUrl: './sidebar-products.component.scss'
})
export class SidebarProductsComponent {
  faShoppingCart = faShoppingCart
  faZoomIn = faMagnifyingGlassPlus
}
