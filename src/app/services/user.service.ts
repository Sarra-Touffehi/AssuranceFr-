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

  getUserById(userId: number): Observable<User> {
    const url = `${this.url}/${userId}`;
    return this.http.get<User>(url, { headers: this.headers });
  }

  getUserByEmail(email: any): Observable<any> {
    const url = `${this.url}/email/${email}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  getUserRole(userId: number): Observable<string> {
    const url = `${this.url}/${userId}/role`;
    return this.http.get<string>(url, { headers: this.headers });
  }
  getUserRoleByMail(email: string): Observable<string> {
    const url = `${this.url}/${email}/role`;
    return this.http.get<string>(url, { headers: this.headers });
  }

  getUserIdByMail(email: any): Observable<number> {
    const url = `${this.url}/${email}/id`; 
    return this.http.get<number>(url, { headers: this.headers });
  }


}

