import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./IUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly registerUrl = 'http://localhost:3000/auth/signup';
  private readonly loginUrl = 'http://localhost:3000/auth/signin';
  private readonly logoutUrl = 'http://localhost:3000/auth/logout';

  constructor(private http: HttpClient) {
  }

  registerUser(data) {
    return this.http.post<IUser>(this.registerUrl, data);
  }
  loginUser(data) {
    return this.http.post<IUser>(this.loginUrl, data);
  }
  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true';
  }

  getUsername() {
    return localStorage.getItem('username');
  }
  getUserId() {
    return localStorage.getItem('userId');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.clear();
    return this.http.post<IUser>(this.registerUrl, '');
  }
}
