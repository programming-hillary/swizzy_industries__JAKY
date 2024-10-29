import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VerifyEmailService } from '../../providers/auth/verify-email/verify-email.service';

@Component({
  selector: 'app-verifying',
  standalone: true,
  template: ``,
  styleUrls: []
})
export class VerifyingComponent implements OnInit {
  oobCode!: string;
  constructor() {}

  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)

  verifier: VerifyEmailService = inject(VerifyEmailService)

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data) => {
      this.oobCode = data.get('oobCode')!

      if(this.oobCode) {
        this.verifier.handleEmailOobVerifier(this.oobCode).subscribe({
          next: () => {
            this.router.navigate(['auth', 'registration-success'])
          },
          error: () => {
            this.router.navigate(['auth', 'unverified-email'])
          }
        })
      } else {
        this.router.navigate(['auth', 'unverified-email'])
      }
    })
  }
}
