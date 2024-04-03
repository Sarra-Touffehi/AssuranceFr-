import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
