import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../models/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private url ="http://localhost:9630/credits/"
  constructor(private http:HttpClient) { }

  getCreditByNumCredit(numCredit:number): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.url +numCredit);
  }

  getCreditByNumCompte(numCompte: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${this.url}numCompte/`+numCompte);
  }
}
