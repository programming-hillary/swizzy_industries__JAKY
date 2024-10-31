import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { BannerCarouselComponent } from './home/ui/banner-carousel/banner-carousel.component';
import { CategoriesComponent } from './categories/categories.component';
import { PinsComponent } from './pins/pins.component';
import { AboutComponent } from './about/about.component';
import { AnalyticsComponent } from './analytics/analytics.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search',
    component: BannerCarouselComponent
  },
  {
    path: 'pins',
    component: PinsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
];
