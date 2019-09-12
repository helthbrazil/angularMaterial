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
  readonly baseIcones = 'assets/images/';

  public iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

  texto = 'Estádios de futebol';
  lat = -12.3156489;
  lng = -53.3928137;
  zoom = 4.5;

  stopTest = false;

  constructor() { }

  ngOnInit() {
    this.adicionarEstadios();
    // this.teste();
  }

  private adicionarEstadios() {
    this.icones = new Array<Mark>();
    this.adicionarEstadio(-19.865862, -43.970895, 'cruzeiro', 'Estádio Mineirão');
    this.adicionarEstadio(-19.9088070, -43.9180767, 'atletico', 'Estádio Independência');
    this.adicionarEstadio(-19.9084170, -43.9180767, 'america', 'Estádio Independência');
    this.adicionarEstadio(-22.9121115, -43.2300097, 'flamengo', 'Estádio Maracanã');
    this.adicionarEstadio(-22.9121115, -43.2304097, 'fluminense', 'Estádio Maracanã');
    this.adicionarEstadio(-22.891276, -43.2283646, 'vasco', 'Estádio São Januário');
    this.adicionarEstadio(-22.8933025, -43.2924699, 'botafogo', 'Estádio Nilton Santos');
  }

  private adicionarEstadio(latitude: number, longitude: number, icone: string, descricao: string) {
    if (this.icones) {
      this.icones.push({
        latitude: latitude,
        longitude: longitude,
        icone: {
          url: `${this.baseIcones}${icone}.png`,
          scaledSize: {
            width: 90,
            height: 90
          }
        },
        descricao: descricao
      });
    }
  }

  testandoGPS() {
    this.stopTest = !this.stopTest;
  }

  teste() {
    setTimeout(() => {
      if (!this.stopTest) {
        this.icones[1]['latitude'] = this.icones[1]['latitude'] + 0.000010;
        console.log(this.icones[1]);
        this.teste();
      }
    }, 1000);
  }

}
