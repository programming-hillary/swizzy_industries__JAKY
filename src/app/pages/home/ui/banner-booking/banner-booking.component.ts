import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MyErrorStateMatcher } from '../../../../auth/ui/sign-up/sign-up.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner-booking',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
  ],
  templateUrl: './banner-booking.component.html',
  styleUrl: './banner-booking.component.scss'
})
export class BannerBookingComponent {
  faSearch = faSearch

  fb: NonNullableFormBuilder = inject(NonNullableFormBuilder)
  router: Router = inject(Router)

  _snackBar: MatSnackBar = inject(MatSnackBar)
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  durationInSeconds: number = 3

  home_banner_search: FormGroup<{
    searchTxt: FormControl<string>
  }> = this.fb.group({
    searchTxt: [''],
  })

  matcher = new MyErrorStateMatcher()

  submitForm(form: any): void {
    if (this.home_banner_search.valid) {



      form.reset()
    } else {
      Object.values(this.home_banner_search.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty()
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
    }
  }

  signInBtnClicked() {
    this.router.navigate(['auth', 'sign-in'])
  }
}
