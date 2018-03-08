import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'generos'
})
export class GenerosPipe implements PipeTransform {

  transform(pelicula: any, genre: any[]): any {
    let str: any = '';
    let generos: string = '';

if (pelicula.length > 0 && genre) {
    pelicula.forEach(element => {
      str = genre.find(o => o.id === element );
      console.log(str);
      if (str) {
      generos += str.name + ', ';
      }
    });
  } else {
    generos = 'Sin género. ';
  }
   generos = generos.slice(0, -2) + '.';
   console.log(generos);
    return generos;
  }

}
