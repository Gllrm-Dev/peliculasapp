import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {
  buscar:string = '';
  generos: any[];

  constructor( public _ps: PeliculasService,
                public route: ActivatedRoute) {
                  this.route.params.subscribe( params => {
                    console.log(params);
                    if ( params['texto'] ) {
                      this.buscar = params['texto'];
                      this.buscarPelicula();
                    }
                  });
                 }

  ngOnInit() {
    this._ps.getGeneros().subscribe( data => {
      this.generos = data;
      console.log(this.generos);
    });
  }

  buscarPelicula() {
    if ( this.buscar.length === 0 ) {
      return;
    } else {
      this._ps.buscarPelicula( this.buscar)
      .subscribe();
    }
  }

}
