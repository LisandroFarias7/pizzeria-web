import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  BASE_URL = 'http://localhost:3000'

   myList: Menu[] = [];

  private myCart = new BehaviorSubject<Menu[]>([]);
  myCart$ = this.myCart.asObservable()

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.BASE_URL}/menu`)
      .pipe(
        catchError(this.handleError)
      );
  }

  addProduct(menu: Menu) {

    if(this.myList.length === 0) {
      menu.cantidad = 1;
      this.myList.push(menu)
      this.myCart.next(this.myList)
    } else {
      const productMod = this.myList.find((element) => {
        return element.id === menu.id
      })
      if(productMod){
        productMod.cantidad = productMod.cantidad + 1;
        this.myCart.next(this.myList)
      }else {
        menu.cantidad = 1;
        this.myList.push(menu)
        this.myCart.next(this.myList)
      }
    }

  }

  deleteProduct(id: string) {
    this.myList = this.myList.filter((menu)=>{
      return menu.id != id;
    })
    this.myCart.next(this.myList)
  }

  findProductById(id: string) {
    return this.myList.find((element)=> {
      return element.id === id;
    })
  }

  totalCart() {
    const total = this.myList.reduce(function(acc, product) {
      return acc + (product.cantidad * product.precio)
    }, 0)
    return total;
  }

 


  getMenuId(id: string): Observable<Menu> {
    return this.http.get<Menu>(`${this.BASE_URL}/menu/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteMenu(id: string): Observable<Menu> {
    return this.http.delete<Menu>(`${this.BASE_URL}/menu/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateMenu(id: string, menu: Menu): Observable<Menu> {
    if (!id || !menu) {
      return throwError('ID y menú son requeridos');
    }

    return this.http.put<Menu>(`${this.BASE_URL}/menu/edit/${id}`, menu)
      .pipe(
        catchError(this.handleError)
      );
  }

  createMenu(menu: Menu): Observable<Menu> {
    if (!menu) {
      return throwError('El menú es requerido');
    }

    return this.http.post<Menu>(`${this.BASE_URL}/menu`, menu)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error en el servidor: ${error.status}, ${error.message}`;
    }

    return throwError(errorMessage);
  }
}
