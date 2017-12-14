import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.Service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from './pelicula';

@Component({
  selector: 'addPelicula',
  templateUrl: './addpelicula.component.html',
  providers: [PeliculasService]
})

export class AddPeliculaComponent{
  public anios:number[];
  public generos:string[];
  public codError:number;
  public codDescripcion:string;
  public pelicula:Pelicula;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _generosService: PeliculasService,
  ){
    //Inicializamos el array desde el año actual hasta 50 años atras
    let contador:number;
    this.anios = new Array<number>(contador);
    for(contador=0; contador<50; contador++){
      this.anios[contador] = new Date().getFullYear() - contador;
      console.log(this.anios[contador]);
    }

    //Cargamos los generos en el array para tenerlos en la plantilla
    this.getAllGeneros()
  }

  getAllGeneros(){
      console.log("getAllGeneros");
      this._route.params.forEach((params: Params) => {

      this._generosService.getAllGeneros().subscribe(
        respuesta => {
          switch (respuesta.code)
          {
            case 200 :
              this.generos = respuesta.data;
              console.log(respuesta.data.length);
              break;
            case 404:
              console.log("Error 404");
              break;
            default:
              console.log("Error " + respuesta.code);
              break;
          }
          this.codError = respuesta.code;
          this.codDescripcion = respuesta.status;
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
