import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent implements OnInit {
  isLoginMode!: string
  routeUrl: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  urlLocation: Location = inject(Location)

  ngOnInit(): void {
    if (this.urlLocation.path() == '/auth/sign-up') {
      this.isLoginMode = 'sign up';
    }
    if (this.urlLocation.path() == '/auth/sign-in') {
      this.isLoginMode = 'sign in';
    }
    if (this.urlLocation.path() == '/auth/edit-profile') {
      this.isLoginMode = 'edit profile';
    }
  }
}
