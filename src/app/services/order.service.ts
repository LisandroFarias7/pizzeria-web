import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs'; 
import { Order } from '../interfaces/order';
import { Menu } from '../interfaces/menu';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  BASE_URL = 'http://localhost:3000' 

  constructor(private http: HttpClient) {

  }

  createOrder(order: Menu): Observable<Menu> {
    return this.http.post<Menu>(`${this.BASE_URL}/orders`, order)
  }

  getOrders(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.BASE_URL}/orders`)
  }

  deleteOrder(id: string): Observable<Menu> {
    return this.http.delete<Menu>(`${this.BASE_URL}/orders/${id}`)
  }
}