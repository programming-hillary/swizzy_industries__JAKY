import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IBusinessDetails } from '../../models/business-info/business-details'

@Injectable({
  providedIn: 'root'
})
export class BusinessDetailsService {
  http: HttpClient = inject(HttpClient)

  publishBusinessData(formData: IBusinessDetails): Observable<Object> {
    return this.http.post('https://jakytech-dev-app-default-rtdb.firebaseio.com/business-details.json', formData)
  }
}
