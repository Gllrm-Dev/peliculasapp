import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map
import { Clasificacion } from '../interfaces/clasificacion';

@Injectable()
export class PeliculasService {

  private apikey:string = "2eb9f8b6156c14c4ae6918bd6ce8cc5a";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas: any[] = [];


  private clasificacion: Clasificacion[] = [
    {
    'cert': 'G',
    'titulo': 'G - Todos los públicos'
    },
  {
    'cert': 'PG',
    'titulo': 'G - Guía paternal sugerida',
  },
  {
    'cert': 'PG-13',
    'titulo': 'PG-13 - Guía paternal estricta'
  },
  {
    'cert': 'R',
    'titulo': 'R - Restringido'
  },
  {
    'cert': 'NC-17',
    'titulo': 'NC-17 - Prohibido para audiencia de 17 años o menos.'
  },
  {
    'cert': 'NR',
    'titulo': 'Sin clasificación'
  }
];

  constructor( private jsonp:Jsonp ) { }

  getCartelera(){
    let url = `${ this.urlMoviedb }/movie/now_playing?api_key=${ this.apikey }&language=en-US&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                .map( res => res.json().results);
  }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }
  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=PG&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> {
                  this.peliculas = res.json().results;
                  console.log(this.peliculas);
                  return res.json().results;
                });
  }

  getCertificaciones() {
    return this.clasificacion;
  }

  getPopularesClas( cert: string){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=${ cert }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res => res.json().results);
  }

  getGeneros() {
    let url = `${ this.urlMoviedb}/genre/movie/list?api_key=${ this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res => res.json().genres);

  }
  getPelicula(id: string) {
    let url = `${ this.urlMoviedb}/movie/${ id }?api_key=${ this.apikey }&language=es-ES&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map( res => res.json());

  }

}
