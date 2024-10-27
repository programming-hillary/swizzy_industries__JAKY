import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './auth/providers/users/user-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  localStorage: UserService = inject(UserService)

  ngOnInit ()
  {
    this.localStorage.handleAutoLogin()
  }
}
