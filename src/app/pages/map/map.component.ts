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
  lat = -25.8174792;
  lng = -53.0555951;
  zoom = 6;

  stopTest = false;

  constructor() { }

  ngOnInit() {
    this.adicionarEstadios();
    // this.teste();
  }

  private adicionarEstadios() {
    this.icones = new Array<Mark>();
    // MG
    this.adicionarEstadio(-19.865862, -43.970895, 'cruzeiro', 'Estádio Mineirão');
    this.adicionarEstadio(-19.9088070, -43.9180767, 'atletico', 'Estádio Independência');
    this.adicionarEstadio(-19.9084170, -43.9180767, 'america', 'Estádio Independência');

    // RJ
    this.adicionarEstadio(-22.9121115, -43.2300097, 'flamengo', 'Estádio Maracanã');
    this.adicionarEstadio(-22.9121115, -43.2304097, 'fluminense', 'Estádio Maracanã');
    this.adicionarEstadio(-22.891276, -43.2283646, 'vasco', 'Estádio São Januário');
    this.adicionarEstadio(-22.8933025, -43.2924699, 'botafogo', 'Estádio Nilton Santos');

    // RS
    this.adicionarEstadio(-30.0654933, -51.2358943, 'inter', 'Estádio Beira Rio');
    this.adicionarEstadio(-29.9739856, -51.1949256, 'gremio', 'Estádio Arena do Grêmio');

    // SP
    this.adicionarEstadio(-23.6000892, -46.7201507, 'sao-paulo', 'Estádio Morumbi');
    this.adicionarEstadio(-23.527462, -46.6786023, 'palmeiras', 'Allianz Parque');
    this.adicionarEstadio(-23.5453273, -46.4743463, 'corinthians', 'Arena Corinthians');
    this.adicionarEstadio(-23.9511325, -46.3389195, 'santos', 'Vila Belmiro');

    // PR
    this.adicionarEstadio(-25.4482116, -49.2780809, 'athletico', 'Arena da Baixada');
    this.adicionarEstadio(-25.4214176, -49.2601248, 'coritiba', 'Couto Pereira');
    this.adicionarEstadio(-25.4394883, -49.2559363, 'parana', 'Vila Capanema');

    // SC
    this.adicionarEstadio(-27.1040407, -52.6073838, 'chapecoense', 'Arena Condá');
    this.adicionarEstadio(-27.6665434, -48.5319978, 'avai', 'Estádio do Avaí');
    this.adicionarEstadio(-27.5859202, -48.5869533, 'figueirense', 'Orlando Escarpelli');

    // BA
    this.adicionarEstadio(-12.9790485, -38.5047977, 'bahia', 'Arena Fonte Nova');
    this.adicionarEstadio(-12.9192663, -38.4278258, 'vitoria', 'Barradão');

    // PE
    this.adicionarEstadio(-8.0629168, -34.9035129, 'sport', 'Arena Fonte Nova');
    this.adicionarEstadio(-8.0406625, -35.0432057, 'nautico', 'Arena Fonte Nova');
    this.adicionarEstadio(-8.0266939, -34.8932999, 'santa-cruz', 'Arena Fonte Nova');



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
