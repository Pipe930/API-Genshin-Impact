import { Component, OnInit } from '@angular/core';
import { ApiGIService } from './../../service/api-gi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  public listaPersonajes: Array<any> = [];

  constructor(
    private servicioAPI: ApiGIService
  ) { }

  ngOnInit(): void {
    this.servicioAPI.listaPersonajes().subscribe((resultado:any) => {
      console.log(resultado);
      this.listaPersonajes = resultado;
    }, error => {
      console.error(error);
    })
  }

  public barraBusqueda():void{

  }

}
