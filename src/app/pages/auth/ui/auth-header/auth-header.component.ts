import { Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.scss',
})
export class AuthHeaderComponent implements OnInit {
  isLoginMode: boolean = true;
  routeUrl: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  urlLocation: Location = inject(Location)

  ngOnInit(): void {


    this.activatedRoute.url.subscribe((data) => {
      console.log(this.urlLocation.path());

    });

    if (this.urlLocation.path() == '/auth/sign-up') {
      this.isLoginMode = false;
    }
    if (this.urlLocation.path() == '/auth/sign-in') {
      this.isLoginMode = true;
    }
  }
}
