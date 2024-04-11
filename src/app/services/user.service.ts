import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:9630/users';
  private headers: HttpHeaders;

  constructor(private http: HttpClient,private authService : AuthService) { 
    this.headers = this.authService.getTokenHeaders();
  }
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url, { headers: this.headers });
  }

  updateUser(userId: number, updatedUser: User): Observable<any> {
    const url = `${this.url}/${userId}`;
    return this.http.put(url, updatedUser, {responseType: 'text' as 'json' , headers: this.headers });
  }

  activateUser(userId: number): Observable<any> {
    const url = `${this.url}/${userId}/activate`;
    return this.http.put(url, {}, { responseType: 'text', headers: this.headers });
  }

  deactivateUser(userId: number): Observable<any> {
    const url = `${this.url}/${userId}/deactivate`;
    return this.http.put(url, {}, { responseType: 'text', headers: this.headers });
  }
}

