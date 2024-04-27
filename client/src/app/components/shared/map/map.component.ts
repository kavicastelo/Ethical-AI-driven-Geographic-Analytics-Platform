import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: any;
  constructor() {
  }
  ngOnInit(): void {
    this.initializeMap();
    this.addMarker(6.9271, 79.8612, 'Colombo'); // Colombo coordinates
    this.addMarker(6.0535, 80.2170, 'Galle'); // Galle coordinates
    this.addMarker(5.9480, 80.5352, 'Matara'); // Matara coordinates
    this.addMarker(6.1240, 81.1185, 'Hambantota'); // Hambantota coordinates
  }

  initializeMap(): void{
    this.map = L.map('map', {
      center: [7.8731, 80.7718], // Center of Sri Lanka
      zoom: 8,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
  }

  addMarker(lat: number, lng: number, title: string) {
    L.marker([lat, lng]).addTo(this.map).bindPopup(title).openPopup();
  }

}
