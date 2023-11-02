import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  public page: number = 0;

  menu: Menu[] = []
  public search: string = '';

  constructor(private menuService: MenuService) {

  }
  ngOnInit(): void {
    this.getMenu()
  }

   getMenu() {
    this.menuService.getMenu()
      .subscribe(
        res => {
          this.menu = res;
        },
        err => console.log(err)
      )
  }

  nextPage() {
    this.page += 6
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 6
    }
  }

  searchMenu(search: string) {
    this.page = 0;
    this.search = search;
  }

  addToCart(menu: Menu) {
    return this.menuService.addProduct(menu)
  }
}
