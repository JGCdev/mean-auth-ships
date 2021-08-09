import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    console.log('User: ', user);
    const api = `${this.endpoint}/register-user`;
    return this.http.post(api, user);
  }

  // Login
  login(user: User) {
    console.log('User: ', user);
    return this.http.post<any>(`${this.endpoint}/signin`, user)
  }

  logout() {
    const removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['']);
    }
  }

  // Error Handler
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
