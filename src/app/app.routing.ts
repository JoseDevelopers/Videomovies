import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { PeliculasComponent } from './peliculas/peliculas.component';
import { AddPeliculaComponent } from './peliculas/addPelicula.component';
import { HomeComponent} from './home/home.component';
import { MainConfiguracionComponent } from './moduloconfiguracion/main-configuracion/main-configuracion.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nueva-pelicula', component: AddPeliculaComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'home', component: HomeComponent},
  {path: 'configuracion', component: MainConfiguracionComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //Cargamos las rutas
