import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-edit-profile-photos',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
  ],
  templateUrl: './edit-profile-photos.component.html',
  styleUrl: './edit-profile-photos.component.scss',
})
export class EditProfilePhotosComponent {

  private _formBuilder: FormBuilder = inject(FormBuilder);

  photosDetails: FormGroup = this._formBuilder.group({});

}
