import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  endpoint = 'http://localhost:8000/api/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  userChange$ = new BehaviorSubject({loggedIn: null});

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  // Register
  register(user: User): Observable<any> {
    const api = `${this.endpoint}/register-user`;
    return this.http.post(api, user);
  }

  // Login
  login(userAuth: Auth) {
    return this.http.post(`${this.endpoint}/login`, userAuth);
  }

  logout() {
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/auth']);
    }
  }

}
