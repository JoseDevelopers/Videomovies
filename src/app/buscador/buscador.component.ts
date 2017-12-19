import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TheMovieDBService } from '../services/TheMovieDB.Service';
import { HostListener } from '@angular/core'; //Importamos el decorador para capturar pulsacion de tecla
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'; //Iframe YouTube
import { GLOBAL } from '../services/global';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  providers: [TheMovieDBService]
})

export class BuscadorComponent{
  public titulo = "";
  public buscador:string;
  public resultado:any[];
  public trustedDashboardUrl : SafeUrl;
  public TheMovieDB_img:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _theMovieDBService: TheMovieDBService,
    private sanitizer: DomSanitizer
  ){
    this.buscador = "";
    this.TheMovieDB_img = GLOBAL.urlTheMovieDB_img;
  }

  @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      //event.key
      //Si hemos pulsado intro, llamamos a buscar
      if(event.keyCode == 13){
        this.buscar();
      }
  }

  buscar(){
    this.titulo = "";
    this._theMovieDBService.getPeliculas(this.buscador).subscribe(
      respuesta => {
         this.titulo = "Resultado de la búsqueda";
         this.resultado = respuesta;
         console.log(this.resultado);
      }
    );
  }

}
