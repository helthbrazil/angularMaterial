import { LoginService } from 'src/app/services/login.service';
import { PrincipalService } from './principal.service';
import { User } from 'src/app/shared/models/user';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';
import { fadeAnimation } from '../../animations/fade.animation';
import { PerfectScrollbarConfig } from 'ngx-perfect-scrollbar';

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
          case '/components':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/components');
            break;

          case '/angular':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/angular');
            break;

          case '/graficos':
            this.itemSelecionado = this.fillerNav.find(item => item.componente === '/graficos');
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
    this.fillerNav.push({ label: 'componentes', componente: '/components', icon: 'assets/images/svg/demo.svg' });
    this.fillerNav.push({ label: 'angular', componente: '/angular', icon: 'assets/images/svg/angular.svg' });
    this.fillerNav.push({ label: 'gráficos', componente: '/graficos', icon: 'assets/images/svg/charts.svg' });

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
