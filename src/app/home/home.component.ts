import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: []
})

export class HomeComponent{
  public titulo = "Página principal";
  public listado_ropa:Array<string>;
  public prenda_a_guardar:string;
  public fecha;

  constructor(){
    this.fecha = new Date(2017,4,15);
  }

  ngOnInit(){
    console.log(this.listado_ropa);
  }

  guardarPrenda(){
    this.prenda_a_guardar = "";
  }

  eliminarPrenda(index:number){

  }
}
