import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../services/peliculas.Service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from './pelicula';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'; //Iframe YouTube
import { GLOBAL } from '../services/global';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  providers: [PeliculasService]
})

export class PeliculasComponent{

  public pelicula:Pelicula;
  public peliculas:Pelicula[];
  public totPeliculas:number;
  public codError:number;
  public codDescripcion:string;
  public trustedDashboardUrl : SafeUrl;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _peliculasService: PeliculasService,
    private sanitizer: DomSanitizer
  ){
    this.pelicula = new Pelicula(0,'',0,0,'',0,'',0,0,0,0,0,'','');
    this.totPeliculas = 0;
  }

  ngOnInit(){
    this.getAllPeliculas();
  }

  verDetalle(pelicula){
    this.pelicula = pelicula;
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pelicula.trailer)
  }

  getTrailer(){
    return this.pelicula.trailer;
  }
  getAllPeliculas(){
      console.log("getAllPeliculas");
      this._route.params.forEach((params: Params) => {

      this._peliculasService.getAllPeliculas().subscribe(
        respuesta => {
          switch (respuesta.code)
          {
            case 200 :
              this.peliculas = respuesta.data;
              this.totPeliculas = respuesta.data.length;
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
