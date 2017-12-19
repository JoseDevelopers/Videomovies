import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class TheMovieDBService{
	public url: string;
	public urlTheMovieDB: string;
	public apiKey_TheMovieDB: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
		this.urlTheMovieDB = GLOBAL.urlTheMovieDB;
		this.apiKey_TheMovieDB = GLOBAL.apiKey_TheMovieDB;
	}


	getAllGeneros(){
		return this._http.get(this.urlTheMovieDB+'genre/movie/list?api_key='+ this.apiKey_TheMovieDB + '&language=es-ES').map(res => res.json());
	}

	getConfiguracion(){
		return this._http.get(this.urlTheMovieDB+'configuration?api_key='+ this.apiKey_TheMovieDB).map(res => res.json());
	}

	getPeliculas(parameter:string){
		return this._http.get(this.urlTheMovieDB+'search/movie?api_key='+ this.apiKey_TheMovieDB + "&language=es-ES&page=1&query=" + parameter).map(res => res.json());
	}

	getTotRegistros(parametro, filtro){
		//return this._http.get(this.url+'producto/'+codigo).map(res => res.json());
		return this._http.get(this.url+"?parametro=2&"+filtro+"="+parametro).map(res => res.json());
	}

}
