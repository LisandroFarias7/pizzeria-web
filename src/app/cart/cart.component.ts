import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Order } from '../interfaces/order';
import { Menu } from '../interfaces/menu';
import { OrderService } from '../services/order.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  myCart$ = this.menuService.myCart$


  listCart: Menu[] = []

  

  constructor(private menuService: MenuService, private orderService: OrderService) {

  }

  ngOnInit() {
    this.myCart$.subscribe((data) => {
      this.listCart = data
    })
    

  }


  createOrder() {
    this.listCart.forEach((pizza: Menu) => {
      console.log(pizza)
      this.orderService.createOrder(pizza).subscribe(res => {
        console.log(res)
      })
    })
    
  }

  totalProduct(precio: number, unidad: number) {
    return precio * unidad;
  }

  deleteProduct(id: string) {
    this.menuService.deleteProduct(id)
  }

  updateUnits(operation: string, id: string) {
    const product = this.menuService.findProductById(id)
    if (product) {
      if (operation === 'minus' && product.cantidad > 0) {
        product.cantidad = product.cantidad - 1;
      }
      if (operation === 'add') {
        product.cantidad = product.cantidad + 1;
      }
      if (product.cantidad === 0) {
        this.deleteProduct(id)
      }
    }
  }

  totalCart() {
    const result = this.menuService.totalCart()
    return result;
  }



}
