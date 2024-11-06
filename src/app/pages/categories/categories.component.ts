import { Component } from '@angular/core';
import { HomeCategoryCardComponent } from "../../shared/components/cards/home-category-card/home-category-card.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HomeCategoryCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

}
