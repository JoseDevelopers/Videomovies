import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform{
  //Metodo obligatorio implementar en la interfaz PipeTransform
  transform(valor, por){
    let value_one = parseInt(valor);
    let value_two = parseInt(por);

    let result = (value_one / value_two) + " €";

    return result;
  }
}
