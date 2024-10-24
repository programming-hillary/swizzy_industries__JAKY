import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthHeaderComponent } from "./auth-header/auth-header.component";
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule, AuthHeaderComponent, AuthFooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
