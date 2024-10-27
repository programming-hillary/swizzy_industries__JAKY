import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ChoosePasswordComponent } from "../choose-password/choose-password.component";
import { VerifyEmailService } from '../../providers/auth/verify-email/verify-email.service';

@Component({
  selector: 'app-email-redirect',
  standalone: true,
  imports: [MatCardModule, ChoosePasswordComponent],
  templateUrl: './email-redirect.component.html',
  styleUrl: './email-redirect.component.scss'
})
export class EmailRedirectComponent implements OnInit {

  pageToDisplay!: string

  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  router: Router = inject(Router)
  isEmailVerified: VerifyEmailService = inject(VerifyEmailService)

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((data) => {
      this.pageToDisplay = data.get('mode')!

      if(this.pageToDisplay === '') {
        this.router.navigate(['auth', 'registration-success'])
      }
    })
  }
}
