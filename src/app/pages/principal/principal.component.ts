import { LoginService } from 'src/app/services/login.service';
import { PrincipalService } from './principal.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatBottomSheet } from '@angular/material';
import { fadeAnimation } from '../../animations/fade.animation';

export interface ItemMenu {
  label: string;
  componente: string;
  icon: string;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: [fadeAnimation]
})
export class PrincipalComponent implements OnInit, OnDestroy {

  title = 'Angular Project';
  mobileQuery: MediaQueryList;
  opened: boolean;
  fillerNav: Array<ItemMenu>;
  itemSelecionado: ItemMenu;
  private _mobileQueryListener: () => void;

  constructor(private router: Router, private principalService: PrincipalService,
    media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, private bottomSheet: MatBottomSheet,
    private loginService: LoginService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  routeEvent(router: Router) {

    console.log('ENTROU AQUI!!!');

    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        console.log(e);
        const url = e.url;
        this.atualizarIconeSelecionado(url);
      }
    });
  }

  private atualizarIconeSelecionado(url) {
    switch (url) {
      case '/':
      case '/components':
        this.itemSelecionado = this.fillerNav.find(item => item.componente === '/components');
        break;

      case '/angular':
        this.itemSelecionado = this.fillerNav.find(item => item.componente === '/angular');
        break;

      case '/graficos':
        this.itemSelecionado = this.fillerNav.find(item => item.componente === '/graficos');
        break;

      case '/map':
        this.itemSelecionado = this.fillerNav.find(item => item.componente === '/map');
        break;

      default:
        /* this.item = '/pessoa/detail'; */
        break;
    }
  }

  ngOnInit() {
    this.itensMenu();
    this.opened = true;
    this.routeEvent(this.router);
    if (this.router.url) {
      this.atualizarIconeSelecionado(this.router.url);
    }
  }

  itensMenu() {
    this.fillerNav = new Array<ItemMenu>();
    this.fillerNav.push({ label: 'Componentes', componente: '/components', icon: 'assets/images/svg/demo.svg' });
    this.fillerNav.push({ label: 'Angular', componente: '/angular', icon: 'assets/images/svg/angular.svg' });
    this.fillerNav.push({ label: 'Gráficos', componente: '/graficos', icon: 'assets/images/svg/charts.svg' });
    this.fillerNav.push({ label: 'Mapa', componente: '/map', icon: 'assets/images/svg/mundo.svg' });

    /* this.fillerNav.push({ label: 'Teste', componente: '/teste', icon: 'assets/images/svg/e.svg' }); */
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  deslogar() {
    this.loginService.deslogar().subscribe(() => {
      console.log('login realizado com sucesso');
    }, err => {
      console.error('Erro ao deslogar');
    });
  }

}
