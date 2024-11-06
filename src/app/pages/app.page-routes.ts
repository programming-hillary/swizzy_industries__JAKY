import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { BannerCarouselComponent } from './home/ui/banner-carousel/banner-carousel.component'
import { CategoriesComponent } from './categories/categories.component'
import { PinsComponent } from './pins/pins.component'
import { AnalyticsComponent } from './analytics/analytics.component'
import { SettingsComponent } from './settings/settings.component'
import { FavouritesComponent } from './favourites/favourites.component'
import { ProfileComponent } from './profile/profile.component'
import { IndexComponent } from './index/index.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'search',
        component: BannerCarouselComponent,
      },
      {
        path: 'pins',
        component: PinsComponent,
      },
      {
        path: 'favourites',
        component: FavouritesComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: 'profiles',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'analytics',
        component: AnalyticsComponent,
      },
    ]
  }
]
