import { Component, ElementRef, ViewChild } from '@angular/core';
import { LatLngTuple, map, Map, tileLayer } from 'leaflet';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-map',
  standalone: false,

  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62];

  @ViewChild('map', { static: true })
  mapRef!: ElementRef;
  map!: Map;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    if (this.map) return;

    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false,
    }).setView(this.DEFAULT_LATLNG, 1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next: (latLng) => {
        console.log(latLng);
      },
    });
  }
}
