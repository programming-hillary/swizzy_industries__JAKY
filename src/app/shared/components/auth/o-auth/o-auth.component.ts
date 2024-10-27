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

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  oAuthSignIn: OAuthSignInService = inject(OAuthSignInService)

  googleAuthBtnClicked() {
    this.oAuthSignIn.handleGoogleSignIn().subscribe({
      next: () => {},
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

  facebookAuthBtnClicked() {
    this.oAuthSignIn.handleFacebookSignIn().subscribe({
      next: () => {},
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
