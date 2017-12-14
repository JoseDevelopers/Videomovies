import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //Imports para el Two way data-binding
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AddPeliculaComponent } from './peliculas/addPelicula.component';
import { HomeComponent } from './home/home.component';
import { ConversorPipe } from './pipes/conversor.pipe';

import { HttpModule} from '@angular/http';  // <------------------------------- AGREGAR
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculasComponent,
    AddPeliculaComponent,
    ConversorPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule // <------------------------------- AGREGAR
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
