import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  GoogleMap,
  GoogleMapsModule,
  MapAdvancedMarker,
} from '@angular/google-maps';

import { MyErrorStateMatcher } from '../../../../auth/ui/sign-up/sign-up.component';
import {
  faFacebookF,
  faInstagram,
  faSquareXTwitter,
  faLinkedinIn,
  faSnapchat,
  faReddit,
  faWhatsapp,
  faIntercom,
} from '@fortawesome/free-brands-svg-icons';
import { faAdd, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BusinessDetailsService } from '../../../../auth/providers/business-info/business-details.service';

@Component({
  selector: 'app-edit-business-details',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatStepperModule,
    FontAwesomeModule,
    GoogleMapsModule,
    MapAdvancedMarker,
  ],
  templateUrl: './edit-business-details.component.html',
  styleUrl: './edit-business-details.component.scss',
})
export class EditBusinessDetailsComponent implements OnInit {
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.options.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  @ViewChild('addSocialLinkBtn')
  addSocialLinkBtn!: ElementRef<HTMLButtonElement>;

  faAdd = faAdd;
  faDelete = faTrashAlt;

  faInternet = faIntercom;
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faXTwitter = faSquareXTwitter;
  faLinkedinIn = faLinkedinIn;
  faSnapchat = faSnapchat;
  faReddit = faReddit;
  faWhatsapp = faWhatsapp;

  matcher = new MyErrorStateMatcher();

  _snackBar: MatSnackBar = inject(MatSnackBar);
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds: number = 3;

  private _formBuilder: FormBuilder = inject(FormBuilder);
  businessDetailsService: BusinessDetailsService = inject(
    BusinessDetailsService
  );

  businessDetails: FormGroup = this._formBuilder.group({
    businessName: ['', [Validators.required]],
    popularName: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    category: ['', [Validators.required]],
    location: this._formBuilder.array([]),
    socialMediaArray: this._formBuilder.array([]),
  });

  @ViewChild(GoogleMap, { static: false })
  map!: GoogleMap;

  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    mapId: 'MAP_ID',
    zoom: 4,
    center: { lat: -1.1612, lng: 36.4836 },
  };

  showLocationDetails = false

  markers = [
    {
      position: { lat: 20, lng: 40 },
    },
  ];

  latitude!: number;
  longitude!: number;

  northiness = this.markers[0].position.lat > 90 ? 'S' : 'N';
  eastiness = this.markers[0].position.lng > 90 ? 'W' : 'E';

  getLat() {
    if (this.markers[0].position.lat > 90) {
      this.latitude = this.markers[0].position.lat - 90
    }
  }

  getLng() {
    if (this.markers[0].position.lng > 90) {
      this.longitude = this.markers[0].position.lng - 90
    }
  }

  addMarker(event: google.maps.MapMouseEvent) {
    const location = {
      position: {
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
      },
    };

    this.showLocationDetails = true

    this.addLocation(location);
  }

  locationArray(): FormArray {
    return this.businessDetails.get('location') as FormArray;
  }

  addLocation(mapLocation: { position: { lat: number; lng: number } }) {
    this.locationArray().clear();

    const latLng = this._formBuilder.group({
      latitude: mapLocation.position.lat,
      longitude: mapLocation.position.lng,
    });

    this.markers[0].position.lat = mapLocation.position.lat;
    this.markers[0].position.lng = mapLocation.position.lng;

    this.locationArray().clear();

    this.locationArray().push(latLng);
  }

  socialMediaLinksArray(): FormArray {
    return this.businessDetails.get('socialMediaArray') as FormArray;
  }

  addSocialLink() {
    const link = this._formBuilder.group({
      linkType: ['', [Validators.required]],
      socialMediaLink: ['', [Validators.required]],
    });

    this.socialMediaLinksArray().push(link);
  }

  removeSocialLink(index: number) {
    this.socialMediaLinksArray().removeAt(index);
  }

  submitBusinessDetails(form: any) {
    if (this.businessDetails.valid) {
      this.businessDetailsService
        .publishBusinessData(this.businessDetails.value)
        .subscribe({
          next: (res) => console.log(res),

          error: (errMsg: string) => {
            this._snackBar.open(errMsg, 'Close', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
          },
        });

      form.reset();
    } else {
      Object.values(this.businessDetails.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
