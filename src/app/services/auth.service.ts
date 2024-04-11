import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:9630/api/v1/auth/';

  constructor(private http: HttpClient) { 

  }
  register(signRequest: any): Observable<any> {
    return this.http.post<any>(this.url+'register', signRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post<any>(this.url + 'authenticate', loginRequest); 
} 
/*
login(loginRequest: any): Observable<any> {
  return this.http.post<any>(this.url + 'authenticate', loginRequest).pipe(
    tap((response: any) => { // Définir le type de response explicitement
      if (!response.user.active) {
        alert('Accès désactivé. Veuillez contacter l\'administrateur.');
      }
    })
  );
}*/

/*

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
            const headers = new HttpHeaders({
              'Authorization': 'Bearer ' + token
            });
            return {config, headers: headers };
          }
          return config;
        }


getTokenHeaders(config: any = {}) {
  const token = localStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return {config, headers: headers };
  }
  return config;
}
*/
getTokenHeaders(): HttpHeaders {
  const token = localStorage.getItem('token');
  if (token) {
    return new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
  }
  return new HttpHeaders();
}

// Method to check if user is logged in
isLoggedIn(): boolean {
  const token = localStorage.getItem('token');
  return token !== null;
}

// Method to log out user
logout(): void {
  localStorage.removeItem('token');
}

// Method to get token expiration date
getTokenExpirationDate(token: string): Date | null {
  const helper = new JwtHelperService();
  const decodedToken = helper.decodeToken(token);
  if (decodedToken.exp === undefined) 
    return null;
  const date = new Date(0);
  date.setUTCSeconds(decodedToken.exp);
  return date;
}


// Method to check if token is expired
isTokenExpired(token?: string): boolean {
  if (!token) token = localStorage.getItem('token') || undefined; // Assurez-vous que token est de type 'string | undefined'
  if (!token) return true;
  const date = this.getTokenExpirationDate(token);
  if (!date) return false; // Vérifiez si date est null ou undefined
  return !(date.valueOf() > new Date().valueOf());
}


// Method to get the token
getToken(): string | null {
  return localStorage.getItem('token');
}

// Method to set the token
setToken(token: string): void {
  localStorage.setItem('token', token);
}

// Method to remove the token
removeToken(): void {
  localStorage.removeItem('token');
}
}
