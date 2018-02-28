import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APP_ROUTING } from './app.routes';
import { PeliculasService } from './services/peliculas.service';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { CuadroComponent } from './components/home/cuadro.component';
import { PeliculaImagenPosterPipe } from './pipes/pelicula-imagen-poster.pipe';
import { GenerosPipe } from './pipes/generos.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    CuadroComponent,
    PeliculaImagenPosterPipe,
    GenerosPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    JsonpModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
