import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../models/credit';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  private url ="http://localhost:9630/credits/"
  private headers: HttpHeaders;
  constructor(private http:HttpClient,  private authService : AuthService) { 
    this.headers = this.authService.getTokenHeaders();

  }

  getCreditByNumCredit(numCredit:number): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.url +numCredit, { headers: this.headers });
  }

  getCreditByNumCompte(numCompte: number): Observable<Credit[]> {
    return this.http.get<Credit[]>(`${this.url}numCompte/`+numCompte, { headers: this.headers });
  }
}
