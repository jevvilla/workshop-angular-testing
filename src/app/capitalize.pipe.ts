import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return;
    return (value.toLowerCase().split(" ").reduce((acum, curr) => {
      return acum += `${curr[0].toUpperCase()}${curr.substr(1)} `;
    }, "")).trim();
  }
}
