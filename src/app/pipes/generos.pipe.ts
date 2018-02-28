import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'generos'
})
export class GenerosPipe implements PipeTransform {

  transform(pelicula: any, genre: any[]): any {
    let str: string = '';
    let generos: string = '';

    pelicula.forEach(element => {
      str = genre.find(o => o.id === element );
      generos += str.name + ', ';


    });

if (generos.length > 1) {
   generos = generos.slice(0, -2) + '.';
} else {
  generos = 'Sin género.';
}
   console.log(generos);
    return generos;
  }

}
