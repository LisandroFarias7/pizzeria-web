import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Menu } from '../interfaces/menu';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  menu: Menu[] = []
  public search: string = '';

  constructor(private menuService: MenuService) {

  }
  ngOnInit(): void {
    this.getMenu()
  }

  async getMenu() {
    (await this.menuService.getMenu())
      .subscribe(
        res => {
          this.menu = res;
        },
        err => console.log(err)
      )
  }

  searchMenu(search: string) {
    this.search = search;
  }
}
