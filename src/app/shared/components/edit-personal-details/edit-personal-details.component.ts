import { Component, EventEmitter, inject, Output } from '@angular/core'
import { MyErrorStateMatcher } from '../../../auth/ui/sign-up/sign-up.component'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-edit-personal-details',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FontAwesomeModule,
  ],
  templateUrl: './edit-personal-details.component.html',
  styleUrl: './edit-personal-details.component.scss',
})
export class EditPersonalDetailsComponent {
  faLongArrowAltRight = faLongArrowAltRight

  private _formBuilder: FormBuilder = inject(FormBuilder)
  matcher = new MyErrorStateMatcher()

  namesFormGrp: FormGroup = this._formBuilder.group({
    firstNameCtrl: ['', [Validators.required]],
    lastNameCtrl: ['', [Validators.required]],
    usernameCtrl: ['', [Validators.required]],
  })
}
