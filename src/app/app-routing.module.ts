import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './component/personajes/personajes.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { ArmasComponent } from './component/armas/armas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  },
  {
    path: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'armas',
    component: ArmasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
