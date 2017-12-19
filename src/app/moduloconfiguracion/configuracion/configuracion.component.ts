import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TheMovieDBService } from '../../services/TheMovieDB.Service';

@Component({
  selector: 'configuracion',
  templateUrl: 'configuracion.component.html',
  providers: [TheMovieDBService]
})

export class ConfiguracionComponent implements OnInit{

  public urlTheMovieDB_img:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _theMovieDBService: TheMovieDBService
  ){

  }

  ngOnInit(){
    this.getConfiguracion();
  }

  getConfiguracion(){
    this._theMovieDBService.getConfiguracion().subscribe(
      respuesta => {
        this.urlTheMovieDB_img = respuesta.images.base_url;
      }
    );
  }

}
