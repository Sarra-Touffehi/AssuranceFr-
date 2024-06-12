import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Propriete } from '../models/propriete';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
private url ="http://localhost:9630/clients"
private headers: HttpHeaders;
  constructor(private http:HttpClient,  private authService : AuthService) { 
    this.headers = this.authService.getTokenHeaders();
  }
  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url, { headers: this.headers });
  }
  
  getClientByNumCompte(numCompte:number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${numCompte}`, { headers: this.headers });
  }

  getClientById(idClient: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/id/${idClient}`, { headers: this.headers });
  }


  
  }


