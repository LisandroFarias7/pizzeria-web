import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(menu: Menu[],page: number = 0, search: string = ''): Menu[] {
    return [];
  }

}
