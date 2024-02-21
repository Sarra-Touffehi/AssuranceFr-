import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compagnie } from '../models/compagnie';
@Injectable({
  providedIn: 'root'
})
export class CompagnieserviceService {

  private url="http://localhost:9470/compagnies"
  constructor(private http: HttpClient) { }

  addCompagnie(compRequest:Compagnie,file:File){
    const formData=new FormData();
    formData.append('file',file);
    formData.append('compnom',compRequest.nom);
    formData.append('compsiege',compRequest.siege);
    formData.append('comptel',compRequest.tel);

    //type de contenu pour le téléchargement du fichier
    const headers=new HttpHeaders({'enctype': 'multipart/form-data'});
      return this.http.post<Compagnie>(`${this.url}`,formData,{headers});
  }
}
