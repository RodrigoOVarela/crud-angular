import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): unknown {
    if (value === 'Abyss')
      return 'home';

    return 'code';
  }

}
