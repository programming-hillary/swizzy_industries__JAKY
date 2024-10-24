import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPersonalDetails } from '../../models/personal-info/personal-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {
  http: HttpClient = inject(HttpClient)

  publishPersonalData(formData: IPersonalDetails): Observable<Object> {
    return this.http.post('https://jakytech-dev-app-default-rtdb.firebaseio.com/personal-details.json', formData)
  }
}
