import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value:any, sortProperty: string, order: string = 'asc'):any {
    if (!value || !value.length) {
      return value;
    }

    return value.sort((a, b) => {
      if (order === 'desc') {
        return -a[sortProperty].localeCompare(b[sortProperty]);
      } else {
        return a[sortProperty].localeCompare(b[sortProperty]);
      }
    });
  }
}
