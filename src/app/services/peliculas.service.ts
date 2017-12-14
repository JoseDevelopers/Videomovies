import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Pelicula } from '../peliculas/pelicula';
import { GLOBAL } from './global';

@Injectable()
export class PeliculasService{
	public url: string;

	constructor(
		public _http: Http
	){
		this.url = GLOBAL.url;
	}

	getAllPeliculas(){
		return this._http.get(this.url+'peliculas').map(res => res.json());
	}

	getAllGeneros(){
		return this._http.get(this.url+'generos').map(res => res.json());
	}

	getPelicula(id){
		return this._http.get(this.url+'pelicula/'+id).map(res => res.json());
	}

	getTotRegistros(parametro, filtro){
		//return this._http.get(this.url+'producto/'+codigo).map(res => res.json());
		return this._http.get(this.url+"?parametro=2&"+filtro+"="+parametro).map(res => res.json());
	}

	addProducto(pelicula: Pelicula){
		let json = JSON.stringify(pelicula);
		let params = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'productos', params, {headers: headers})
						 .map(res => res.json());
	}

	editProducto(id, pelicula: Pelicula){
		let json = JSON.stringify(pelicula);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

		return this._http.post(this.url+'update-producto/'+id, params, {headers: headers})
						 .map(res => res.json());
	}

	deleteProducto(id){
		return this._http.get(this.url+'delete-producto/'+id)
						 .map(res => res.json());
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>){
		return new Promise((resolve, reject)=>{
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();

			for(var i = 0; i < files.length; i++){
				formData.append('uploads[]', files[i], files[i].name);
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			};

			xhr.open("POST", url, true);
			xhr.send(formData);
		});
	}

}
