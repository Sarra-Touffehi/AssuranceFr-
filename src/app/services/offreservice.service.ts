import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../models/offre';
import { Observable } from 'rxjs';
import { Compagnie } from '../models/compagnie';

@Injectable({
  providedIn: 'root'
})
export class OffreserviceService {
  private url="http://localhost:9630"

  constructor(private http: HttpClient) { }
  getOffresPourCompagnie(idCompagnie: number): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.url}/compagnies/${idCompagnie}/offres`);
  }

  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.url}/offres`);
  }
  

 /* addOffresPourCompagnie(idcomp: number, offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(`${this.url}/compagnies/${idcomp}/offres`, offre);
  } */

  addOffresPourCompagnie(idcomp: number, offre: Offre): Observable<any> {
    // Créer un objet compagnie conforme au modèle Compagnie attendu par le backend
    const compagnie: Compagnie = {
      idcomp: idcomp,
      siege: '', 
      tel: '', 
      logoUrl: '', 
      offres: [], 
      logo: null, 
      nom: '' 
    };
  
    // Assigner l'objet compagnie à l'offre
    offre.compagnie = compagnie;
  
    return this.http.post<any>(`${this.url}/compagnies/${idcomp}/offres`, offre, { responseType: 'text' as 'json' });
  }

  addOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>(`${this.url}/offres`, offre);
  }

  updateOffre(id: number, offre: Offre): Observable<any> {
    return this.http.put<any>(`${this.url}/offres/${id}`, offre, { responseType: 'text' as 'json' });
  }

  getOffreById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.url}/offres/${id}`);
  }
}
