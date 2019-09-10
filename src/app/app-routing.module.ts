import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AuthGuard } from './guards/auth.guard';
import { ComponentsComponent } from './pages/components/components.component';
import { AngularHelpComponent } from './pages/angular-help/angular-help.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: ''
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'components',
      },
      {
        path: 'components',
        component: ComponentsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'angular',
        component: AngularHelpComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'graficos',
        component: GraficosComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'map',
        component: MapComponent,
        canActivate: [AuthGuard]
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
