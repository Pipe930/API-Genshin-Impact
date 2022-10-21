import { Component, OnInit } from '@angular/core';
import { ApiGIService } from './../../service/api-gi.service';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.scss']
})
export class ArmasComponent implements OnInit {
  public nombresArmas: Array<any> = [];

  constructor(
    private servicioAPI: ApiGIService
  ) { }

  ngOnInit(): void {
    this.servicioAPI.listaArmas().subscribe((resultado:any) => {
      console.log(resultado);
      this.nombresArmas = resultado;
    }, error => {
      console.error(error);
    })
  }

}
