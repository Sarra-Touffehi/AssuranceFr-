import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
private url ="http://localhost:9630/clients/"
  constructor(private http:HttpClient) { }

  getClientByNumCompte(numCompte:number): Observable<Client> {
    return this.http.get<Client>(this.url +numCompte);
  }
  }


