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
  lat = -19.908867;
  lng = -43.9180767;
  zoom = 17;

  stopTest = false;

  constructor() { }

  ngOnInit() {
    this.adicionarEstadios();
    // this.teste();
  }

  private adicionarEstadios() {
    this.icones = new Array<Mark>();
    this.icones.push({
      latitude: -19.865862,
      longitude: -43.970895,
      icone: {
        url: `${this.baseIcones}cruzeiro.png`,
        scaledSize: {
          width: 100,
          height: 100
        }
      },
      descricao: 'Mineirão. Mais conhecido como Toca III. O abatedouro de franguinhas.'
    });

    this.icones.push({
      latitude: -19.9088070,
      longitude: -43.9180767,
      icone: {
        url: `${this.baseIcones}atletico.png`,
        scaledSize: {
          width: 65,
          height: 90
        }
      },
      descricao: 'Independência. Mas conhecido como casa das frangas e do coelhinho.'
    });

    this.icones.push({
      latitude: -19.9084170,
      longitude: -43.9180767,
      icone: {
        url: `${this.baseIcones}america.png`,
        scaledSize: {
          width: 90,
          height: 90
        }
      },
      descricao: 'Independência. Mas conhecido como casa das frangas e do coelhinho.'
    });


    this.icones.push({
      latitude: -22.9121115,
      longitude: -43.2310097,
      icone: {
        url: `${this.baseIcones}flamengo.png`,
        scaledSize: {
          width: 90,
          height: 90
        }
      },
      descricao: 'Independência. Mas conhecido como casa das frangas e do coelhinho.'
    });

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
