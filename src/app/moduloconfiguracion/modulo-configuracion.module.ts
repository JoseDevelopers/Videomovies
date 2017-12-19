//Obligatorios para crear componentes
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importar componentes
import { GenerosComponent } from './generos/generos.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MainConfiguracionComponent } from './main-configuracion/main-configuracion.component';

//Decorador ngModule para cargar los componentes y la configuracion del modulo
@NgModule({
  imports:[CommonModule], //modulos necesarios
  declarations: [
    GenerosComponent,
    ConfiguracionComponent,
    MainConfiguracionComponent
  ], //componentes del modulo
  exports: [MainConfiguracionComponent] //componente para poder usar fuera del modulo
})

export class ModuloConfiguracionModule {

}
