import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './interceptor/interceptor.module';
import { ComponentsComponent } from './pages/components/components.component';
import { AngularHelpComponent } from './pages/angular-help/angular-help.component';
import { GraficosComponent } from './pages/graficos/graficos.component';
import { PaddingDirective } from './directives/padding.directive';

// SCROLLBAR
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoadingComponent } from './pages/loading/loading.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { MapComponent } from './pages/map/map.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ComponentsComponent,
    AngularHelpComponent,
    GraficosComponent,
    PaddingDirective,
    LoadingComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Interceptor,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBt-52lhTgDhmXzLgWR-ZxzfmmEfbuV3so'
    }),
    AgmJsMarkerClustererModule,
    MaterialModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
