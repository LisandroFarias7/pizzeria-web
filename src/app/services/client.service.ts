import { Injectable } from '@angular/core';
import { ClientData } from '../interfaces/client';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  BASE_URL = 'http://localhost:3000' 

  constructor(private http: HttpClient) {

  }

  createClient(client: ClientData): Observable<ClientData>{
    return this.http.post<ClientData>(`${this.BASE_URL}/client`, client);
  }

  getClients(): Observable<ClientData[]> {
    return this.http.get<ClientData[]>(`${this.BASE_URL}/client`)
  }

  deleteClient(id: string): Observable<ClientData> {
    return this.http.delete<ClientData>(`${this.BASE_URL}/client/${id}`)
  }

}