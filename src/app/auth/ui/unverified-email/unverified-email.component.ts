import { Component, inject } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { UserService } from '../../providers/users/user-service.service'

@Component({
  selector: 'app-unverified-email',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FontAwesomeModule
  ],
  templateUrl: './unverified-email.component.html',
  styleUrl: './unverified-email.component.scss'
})
export class UnverifiedEmailComponent {
  router: Router = inject(Router)
  user: UserService = inject(UserService)

  signInBtnClicked() {
    this.router.navigate(['auth', 'sign-in'])
  }

  signUpBtnClicked() {
    this.router.navigate(['auth', 'sign-up'])
  }

  verifyBtnClicked() {
    if(this.user.createdUser != null) {
      this.router.navigate(['auth', 'verifier'])
    } else {
      this.signUpBtnClicked()
    }
  }
}
