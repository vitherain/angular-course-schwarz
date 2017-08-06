import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    if (!value || !value.length) {
      return '';
    }

    const strAsArray: string[] = value.split('');
    const reversedArray = strAsArray.reverse();

    return reversedArray.join('');
  }
}
