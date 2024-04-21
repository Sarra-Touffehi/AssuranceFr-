import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Souscription } from '../models/souscription';

@Injectable({
  providedIn: 'root'
})
export class SouscriptionService {
  private url = 'http://localhost:9630/souscription';
  private headers: HttpHeaders;
  constructor(private http: HttpClient,  private authService : AuthService) {
    this.headers = this.authService.getTokenHeaders();
   }

  souscrire(clientId: number, offreId: number, souscription: any): Observable<any> {
    return this.http.post<any>(`${this.url}/${clientId}/offre/${offreId}`, souscription, { headers: this.headers });
  }

  getAllSouscriptions(): Observable<Souscription[]> {
    return this.http.get<Souscription[]>(`${this.url}`, { headers: this.headers });
  }

  validerSouscription(idSousc: number): Observable<any> {
    return this.http.post<any>(`${this.url}/valider/${idSousc}`, {}, { headers: this.headers });
  }

  resilierContrat(idSousc: number): Observable<any> {
    return this.http.post<any>(`${this.url}/resilier/${idSousc}`, {}, { headers: this.headers });
  }

  supprimerSouscription(idSousc: number) {
    return this.http.delete(`${this.url}/supprimer/${idSousc}`, { headers: this.headers });
  }
}
