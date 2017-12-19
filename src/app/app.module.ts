import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Imports para el Two way data-binding
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AddPeliculaComponent } from './peliculas/addPelicula.component';
import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';

// Importamos el nuevo modulo
import { ModuloConfiguracionModule } from './moduloconfiguracion/modulo-configuracion.module';
import { ConversorPipe } from './pipes/conversor.pipe';

import { HttpModule} from '@angular/http';  // <------------------------------- AGREGAR
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculasComponent,
    AddPeliculaComponent,
    BuscadorComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloConfiguracionModule,
    routing,
    HttpModule // <------------------------------- AGREGAR
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
