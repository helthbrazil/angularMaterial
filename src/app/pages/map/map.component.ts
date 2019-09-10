import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  texto: string = 'Toca III';
  lat: number = -19.865862;
  lng: number = -43.970895;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
  }

}
