import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula: any;
  generos: string = '';
  regresarA: string;

  constructor( private route: ActivatedRoute,
               private _ps: PeliculasService  ) {

                }

  ngOnInit() {
    this.route.params.subscribe( params => {
      // this.pelicula = params;
      // console.log(this.pelicula);
      this.regresarA = params['pag'];
      this._ps.getPelicula(params['id'])
        .subscribe( pelicula => {
          this.pelicula = pelicula;
          console.log(this.pelicula.genres);
          this.pelicula.genres.forEach(element => {
            this.generos += element.name + ', ';
          });
          this.generos = this.generos.slice(0,-2)+ '.';
          console.log(this.generos);
        });


    });


  }

}
