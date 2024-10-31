import { Component, ViewChild, signal } from '@angular/core'
import {
  GoogleMap,
  GoogleMapsModule,
  MapAdvancedMarker,
} from '@angular/google-maps'

@Component({
  selector: 'app-booking-map',
  standalone: true,
  imports: [GoogleMapsModule, MapAdvancedMarker],
  templateUrl: './booking-map.component.html',
  styleUrl: './booking-map.component.scss',
})
export class BookingMapComponent {
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.options.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  @ViewChild(GoogleMap, { static: false })
  map!: GoogleMap

  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    mapId: 'MAP_ID',
    zoom: 10,
    center: { lat: -1.1612, lng: 36.4836 },
  }

  markers = [
    {
      position: {
        lat: 0,
        lng: 0,
      },
    },
  ]

  showLocationDetails = false

  latitude = signal<number>(0)
  longitude = signal<number>(0)
  northiness = signal<string>('')
  eastiness = signal<string>('')

  showLocationDetail(event: google.maps.MapMouseEvent) {
    const location = {
      position: {
        lat: event.latLng!.lat(),
        lng: event.latLng!.lng(),
      },
    }

    if (Math.sign(location.position.lng) === -1) {
      let positiveCood = Math.abs(location.position.lng)
      this.longitude.set(positiveCood)
      this.eastiness.set('W')
    } else {
      this.longitude.set(location.position.lng)
      this.eastiness.set('E')
    }

    if (Math.sign(location.position.lat) === -1) {
      let positiveCood = Math.abs(location.position.lat)
      this.latitude.set(positiveCood)
      this.northiness.set('S')
    } else {
      this.latitude.set(location.position.lat)
      this.northiness.set('N')
    }

    this.markers.push(location)

    this.showLocationDetails = true
  }
}
