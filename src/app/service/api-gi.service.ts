import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje } from './../module/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiGIService {
  public urlApi: string = 'https://api.genshin.dev';

  constructor(
    private httpclient: HttpClient
  ) { }

  public listaPersonajes(){
    let urlPersonajes = `${this.urlApi}/characters`

    return this.httpclient.get(urlPersonajes);
  }

  public obtenerPersonaje(nombrePersonaje: string):Observable<Personaje>{
    let urlPersonaje = `${this.urlApi}/characters/${nombrePersonaje}`

    return this.httpclient.get<Personaje>(urlPersonaje);
  }

  public listaArmas(){
    let urlArmas = `${this.urlApi}/weapons`

    return this.httpclient.get(urlArmas);
  }
}
