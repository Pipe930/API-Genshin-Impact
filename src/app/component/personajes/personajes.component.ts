import { Component, OnInit } from '@angular/core';
import { ApiGIService } from './../../service/api-gi.service';
import { Personaje } from './../../module/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  public listaNombres: Array<any> = [];
  public listaPersonajes: Array<Personaje> = [];

  constructor(
    private servicioAPI: ApiGIService
  ) { }

  ngOnInit(): void {
    this.servicioAPI.listaPersonajes().subscribe((resultado:any) => {
      console.log(resultado);
      this.listaNombres = resultado;
      for(let nombre of this.listaNombres){
        this.servicioAPI.obtenerPersonaje(nombre).subscribe((resultadoPersonaje:any) => {
          console.log(resultadoPersonaje);
          this.listaPersonajes = resultadoPersonaje;
        }, error => {
          console.error(error);
        })
      }
    }, error => {
      console.error(error);
    })
  }

  public barraBusqueda(evento: Event):void{
    const buscar = (evento.target as HTMLInputElement).value;
    console.log(buscar);
  }

}
