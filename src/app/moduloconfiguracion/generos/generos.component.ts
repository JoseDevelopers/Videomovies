import { Component } from '@angular/core';
import { TheMovieDBService } from '../../services/TheMovieDB.Service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Genero } from './genero';

@Component({
  templateUrl: 'generos.component.html',
  selector: 'generos',
  providers: [TheMovieDBService]
})

export class GenerosComponent{

  public generos:Genero[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _theMovieDBService: TheMovieDBService
  ){

  }

  ngOnInit(){
    this.getAllGeneros()
  }

  getAllGeneros(){
    this._theMovieDBService.getAllGeneros().subscribe(
      respuesta => {
        this.generos = respuesta.genres;
        console.log(this.generos);
      }
    );
  }
}
