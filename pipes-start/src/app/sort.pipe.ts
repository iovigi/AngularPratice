import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, propertyName:string): any {
    return value.sort((x, y) => {
      if (x[propertyName] < y[propertyName])
        return -1;
      if (x[propertyName] > y[propertyName])
        return 1;
      return 0;
    });
  }
}
