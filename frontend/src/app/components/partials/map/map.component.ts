import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  icon,
  LatLngExpression,
  LatLngTuple,
  map,
  Map,
  marker,
  Marker,
  tileLayer,
} from 'leaflet';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-map',
  standalone: false,

  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  private readonly MARKER_ZOOM_LEVEL = 16;
  private readonly MARKER_ICON = icon({
    iconUrl: '/assets/map-marker.svg',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62];

  @ViewChild('map', { static: true })
  mapRef!: ElementRef;
  map!: Map;
  currentMarker!: Marker;

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
        this.map.setView(latLng, this.MARKER_ZOOM_LEVEL);
        this.setMarker(latLng);
      },
    });
  }

  setMarker(latLng: LatLngExpression) {
    if (this.currentMarker) {
      this.currentMarker.setLatLng(latLng);
      return;
    }

    this.currentMarker = marker(latLng, {
      draggable: true,
      icon: this.MARKER_ICON,
    }).addTo(this.map);
  }
}
