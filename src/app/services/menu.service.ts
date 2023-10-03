import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  BASE_URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.BASE_URL}/menu`)
  }

  getMenuId(id: string): Observable<Menu> {
    return this.http.get<Menu>(`${this.BASE_URL}/menu/${id}`)
  }

  deleteMenu(id: string): Observable<Menu> {
    return this.http.delete<Menu>(`${this.BASE_URL}/menu/${id}`)
  }

  updateMenu(id:string, menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`${this.BASE_URL}/menu/edit/${id}`, menu)
  }

  createMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(`${this.BASE_URL}/menu`, menu)
  }
}
