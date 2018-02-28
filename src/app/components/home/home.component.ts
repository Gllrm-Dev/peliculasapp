import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "../../services/peliculas.service";
import { PeliculaImagenPipe } from "../../pipes/pelicula-imagen.pipe";
import { Clasificacion } from "../../interfaces/clasificacion";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  providers: []
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares: any;
  popularesNinos: any;
  certifiaciones: Clasificacion[];
  popularesClas: any[] = [];

  constructor(public _ps: PeliculasService) {
    this._ps.getCartelera().subscribe(data => {
      this.cartelera = data;
      console.log(this.cartelera);
    });

    this._ps.getPopulares().subscribe(data => {
      this.populares = data;
      console.log("populares");
      console.log(this.populares);
    });

    // this._ps.getPopularesNinos().subscribe(data => {
    //   this.popularesNinos = data;
    //   console.log("Populares Niños");
    //   console.log(data);
    // });

  }

  ngOnInit() {

        this.certifiaciones = this._ps.getCertificaciones();
        console.log('certificaciones', this.certifiaciones);

    for (let i = 0; i < this.certifiaciones.length; i++) {
      this._ps.getPopularesClas(this.certifiaciones[i].cert).subscribe(data => {
        this.popularesClas.push(data);
      });

  }
  console.log(this.popularesClas);
}
}
