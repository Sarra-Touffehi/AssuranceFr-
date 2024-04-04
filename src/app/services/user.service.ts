import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:9630/api/v1/auth/';

  constructor(private http: HttpClient) { 

  }
  register(signRequest: any): Observable<any> {
    return this.http.post<any>(this.url+'register', signRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<any>(this.url+'authenticate', loginRequest);
  }

  public loggedInUser ={ 
    _id:'',
     nom: '',
    motdepasse: '',
      
      };

      helper = new JwtHelperService();

      saveData(token:any){
        let decodeToken= this.helper.decodeToken(token);
      
        localStorage.setItem('token',token);
        
       
        console.log(decodeToken);
          
        }
        getTokenHeaders(config: any = {}) {
          const token = localStorage.getItem('token');
          if (token) {
            // Création d'un objet HttpHeaders avec le token
            const headers = new HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            // Fusionner les en-têtes avec les en-têtes de configuration supplémentaires
            return {config, headers: headers };
          }
          return config;
        }


}
