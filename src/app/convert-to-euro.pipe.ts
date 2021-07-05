import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToEuro'
})
export class ConvertToEuroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
