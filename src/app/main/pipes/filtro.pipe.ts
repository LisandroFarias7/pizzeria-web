import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(menu: Menu[],page: number = 0, search: string = ''): Menu[] {

    if(search.length === 0) {
      return menu.slice(page, page + 6)
    } 
    
    const filteredMenu = menu.filter(pizza => pizza.descripcion.includes( search ))
    return filteredMenu.slice(page, page + 6);
    
  }

}
