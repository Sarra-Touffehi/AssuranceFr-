import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agence } from '../models/agence';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  private url ="http://localhost:9630/agences"
  private headers: HttpHeaders;
  constructor(private http:HttpClient,  private authService : AuthService) { 
    this.headers = this.authService.getTokenHeaders();
  }

  getAllAgences(): Observable<Agence[]> {
    return this.http.get<Agence[]>(`${this.url}`, { headers: this.headers });
  }

}
