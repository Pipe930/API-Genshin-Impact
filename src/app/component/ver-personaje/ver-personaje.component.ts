import { Component, OnInit } from '@angular/core';
import { ApiGIService } from './../../service/api-gi.service';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from './../../module/personaje';

@Component({
  selector: 'app-ver-personaje',
  templateUrl: './ver-personaje.component.html',
  styleUrls: ['./ver-personaje.component.scss']
})
export class VerPersonajeComponent implements OnInit {
  public nombrePersonaje: string = '';
  public personaje!: Personaje;

  constructor(
    private servicioApi: ApiGIService,
    private ruta: ActivatedRoute
  ) {
    this.ruta.params.subscribe(parametros => {
      console.log(parametros['nombrePersonaje']);
      this.nombrePersonaje = parametros['nombrePersonaje'];
    }, error => {
      console.error(error);
    })
   }

  ngOnInit(): void {
    this.servicioApi.obtenerPersonaje(this.nombrePersonaje).subscribe(personaje => {
      console.log(personaje);
      this.personaje = personaje;
    }, error => {
      console.error(error);
    })
  }

}
