import { Component, OnInit } from '@angular/core';

export interface Mark {
  latitude: number;
  longitude: number;
  icone: any;
  descricao: string;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  icones: Array<Mark>;
  readonly baseIcones = 'assets/images/svg/';

  public iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
  icone = {
    url: 'assets/images/svg/fox.svg',
    scaledSize: {
      width: 100,
      height: 100
    }
  };

  iconeFranga = {
    url: 'assets/images/svg/franga.svg',
    scaledSize: {
      width: 100,
      height: 100
    }
  };

  texto: string = 'Toca III';
  lat: number = -19.865862;
  lng: number = -43.970895;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {
    this.icones = new Array<Mark>();
    this.icones.push({
      latitude: -19.865862,
      longitude: -43.970895,
      icone: {
        url: `${this.baseIcones}fox.svg`,
        scaledSize: {
          width: 100,
          height: 100
        }
      },
      descricao: 'Mineirão. Mais conhecido como Toca III. O abatedouro de franguinhas.'
    });

    this.icones.push({
      latitude: -19.908867,
      longitude: -43.9180767,
      icone: {
        url: `${this.baseIcones}franga.svg`,
        scaledSize: {
          width: 50,
          height: 50
        }
      },
      descricao: 'Independência. Mas conhecido como casa das frangas e do coelhinho.'
    });

  }

}
