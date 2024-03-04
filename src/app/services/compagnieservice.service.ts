import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compagnie } from '../models/compagnie';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompagnieserviceService {

  private url="http://localhost:9630/compagnies"

  constructor(private http: HttpClient) { }

  addCompagnie(compRequest:Compagnie,file:File){
    const formData=new FormData();
    if (compRequest.logo) {
      formData.append('file', compRequest.logo);
    }
   // formData.append('file',file);
   

    formData.append('compnom',compRequest.nom);
    formData.append('compsiege',compRequest.siege);
    formData.append('comptel',compRequest.tel);

    //type de contenu pour le téléchargement du fichier
    const headers=new HttpHeaders({'enctype': 'multipart/form-data'});
      return this.http.post<Compagnie>(`${this.url}`,formData,{headers});
  }
 

  /*getCompagnies():Observable<Compagnie[]>{
    return this.http.get<Compagnie[]>(this.url);

  }*/
  getCompagnies(): Observable<Compagnie[]> {
    return this.http.get<Compagnie[]>(this.url).pipe(
      map((compagnies: Compagnie[]) => {
        // Assurez-vous que les logos sont des Blobs ou des Files valides
        return compagnies.map(compagnie => {
          //const logo =  compagnie.logo instanceof File ? compagnie.logo as File : null;

           // Assurez-vous que le logo est une donnée binaire valide
        const logo = compagnie.logo instanceof Blob ? compagnie.logo : null;
          return new Compagnie(compagnie.idcomp,logo, compagnie.nom, compagnie.siege, compagnie.tel);
        });
      })
    );
  }


  supprimerCompagnie(idcomp?:number):Observable<Compagnie>{
    
      return this.http.delete<Compagnie>(`${this.url}/${idcomp}`);
      }
  }
