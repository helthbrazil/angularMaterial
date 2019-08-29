import { LoginService } from 'src/app/services/login.service';
import { PrincipalService } from './principal.service';
import { User } from 'src/app/shared/models/user';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
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

  title = 'Nome do sistema';
  mobileQuery: MediaQueryList;
  opened: boolean;
  fillerNav: Array<ItemMenu>;
  itemSelecionado: ItemMenu;
  private _mobileQueryListener: () => void;

  constructor(private router: Router, private principalService: PrincipalService,
    media: MediaMatcher, changeDetectorRef: ChangeDetectorRef, private bottomSheet: MatBottomSheet) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.opened = true;
    this.itensMenu();
    this.routeEvent(this.router);
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        console.log(e);
        const url = e.url;
        switch (url) {
          case '/':
          case '/demo':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/demo');
            break;

          case '/busca_cep':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/busca_cep');
            break;

          case '/angular_docs':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/angular_docs');
            break;

          case '/anotacoes':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/anotacoes');
            break;

          case '/drag_drop':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/drag_drop');
            break;

          case '/diretivas':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/diretivas');
            break;

          case '/tabelas':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/tabelas');
            break;

          case '/graficos':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/graficos');
            break;

          case '/sobre':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/sobre');
            break;


          default:
            /* this.item = '/pessoa/detail'; */
            break;
        }
      }
    });
  }

  itensMenu() {
    this.fillerNav = new Array<ItemMenu>();
    this.fillerNav.push({ label: 'componentes', componente: '/demo', icon: 'assets/images/svg/demo.svg' });
    this.fillerNav.push({ label: 'cep', componente: '/busca_cep', icon: 'assets/images/svg/location.svg' });
    this.fillerNav.push({ label: 'angular', componente: '/angular_docs', icon: 'assets/images/svg/angular.svg' });
    this.fillerNav.push({ label: 'anotacoes', componente: '/anotacoes', icon: 'assets/images/svg/notes.svg' });
    this.fillerNav.push({ label: 'dragDrop', componente: '/drag_drop', icon: 'assets/images/svg/move.svg' });
    this.fillerNav.push({ label: 'diretivas', componente: '/diretivas', icon: 'assets/images/svg/move.svg' });
    this.fillerNav.push({ label: 'tabelas', componente: '/tabelas', icon: 'assets/images/svg/table.svg' });
    this.fillerNav.push({ label: 'gráficos', componente: '/graficos', icon: 'assets/images/svg/charts.svg' });
    this.fillerNav.push({ label: 'sobre', componente: '/sobre', icon: 'assets/images/svg/information.svg' });
    /* this.fillerNav.push({ label: 'Teste', componente: '/teste', icon: 'assets/images/svg/e.svg' }); */
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  deslogar() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
