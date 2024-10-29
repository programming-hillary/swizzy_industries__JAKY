import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Component, EventEmitter, inject, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { OAuthSignInService } from '../../../../auth/providers/auth/o-auth/o-auth-sign-in.service'
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../../../auth/providers/auth/errors/error-handler.service';

@Component({
  selector: 'app-o-auth',
  standalone: true,
  imports: [MatButtonModule, FontAwesomeModule],
  templateUrl: './o-auth.component.html',
  styleUrl: './o-auth.component.scss',
})
export class OAuthComponent {
  faGoogleG = faGoogle
  faFacebookF = faFacebookF

  @Output()
  isLoading = new EventEmitter<boolean>()

  router: Router = inject(Router)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  oAuthSignIn: OAuthSignInService = inject(OAuthSignInService)

  googleAuthBtnClicked() {
    this.isLoading.emit(true)

    this.oAuthSignIn.handleGoogleSignIn()
    .subscribe({
      next: () => {
        console.log('start google next')
        this.router.navigate([''])
        this.isLoading.emit(false)
      },
      error: (errMsg: string) => {
        console.log('start google err')
        this._snackBar.open(errMsg, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        })

        this.isLoading.emit(false)
      },
    })
  }

  facebookAuthBtnClicked() {
    this.isLoading.emit(true)

    this.oAuthSignIn.handleFacebookSignIn().subscribe({
      next: () => {
        this.router.navigate([''])
        this.isLoading.emit(false)
      },
      error: (errMsg: string) => {
        this._snackBar.open(errMsg, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        })

        this.isLoading.emit(false)
      },
    })
  }
}
