import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/components/cards/banner/banner.component";
import { MainCategoriesComponent } from "../home/ui/main-categories/main-categories.component";
import { ServicesComponent } from "../home/ui/services/services.component";
import { PopularProvidersComponent } from "../home/ui/popular-providers/popular-providers.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [BannerComponent, MainCategoriesComponent, ServicesComponent, PopularProvidersComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
