import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.sort((x, y) => {
      if (x.name < y.name)
        return -1;
      if (x.name > y.name)
        return 1;
      return 0;
    });
  }
}
