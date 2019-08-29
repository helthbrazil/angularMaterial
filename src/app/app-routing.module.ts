import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'principal'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
