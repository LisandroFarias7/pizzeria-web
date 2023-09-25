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

  async getMenu(): Promise<Observable<Menu[]>> {
    return await this.http.get<Menu[]>(`${this.BASE_URL}/menu`)
  }

  async getMenuId(id: string): Promise<Observable<Menu>> {
    return await this.http.get<Menu>(`${this.BASE_URL}/menu/${id}`)
  }

  async deleteMenu(id: string): Promise<Observable<Menu>> {
    return await this.http.delete<Menu>(`${this.BASE_URL}/admin/${id}`)
  }

  async updateMenu(id:string, menu: Menu): Promise<Observable<Menu>> {
    return await this.http.put<Menu>(`${this.BASE_URL}/admin/edit`, menu)
  }
}
