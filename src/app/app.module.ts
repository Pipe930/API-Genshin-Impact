import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { PersonajesComponent } from './component/personajes/personajes.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ArmasComponent } from './component/armas/armas.component';
import { VerPersonajeComponent } from './component/ver-personaje/ver-personaje.component';
import { SublevelMenuComponent } from './component/sidenav/sublevel-menu.component';
import { ArtefactosComponent } from './component/artefactos/artefactos.component';
import { MaterialesComponent } from './component/materiales/materiales.component';
import { HeaderComponent } from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    PersonajesComponent,
    InicioComponent,
    ArmasComponent,
    VerPersonajeComponent,
    SublevelMenuComponent,
    ArtefactosComponent,
    MaterialesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
