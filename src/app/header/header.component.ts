import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  viewCart: boolean = false;
  myCart$ = this.menuService.myCart$

  constructor(private menuService: MenuService) {

  }

  ngOnInit(): void {
      
  }

  onToggleCart() {
    this.viewCart = !this.viewCart
  }

}
