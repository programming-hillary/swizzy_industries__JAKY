import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoLoginService } from './auth/providers/auth/auto-logIn/auto-login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  localStorage: AutoLoginService = inject(AutoLoginService)

  ngOnInit ()
  {
    this.localStorage.handleAutoLogin()
  }
}
