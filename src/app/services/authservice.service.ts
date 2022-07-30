import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';
import { environment } from '../../environments/environment';
import { User } from '../contract/user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.api_url}`;
  private handleError: HandleError;
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: any;

  constructor(
    private http: HttpClient,
    
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('AuthService')
  }

  signup(data: User) {
    return this.http.post(this.apiUrl+"auth/signup/", data, this.httpOptions)
    .pipe(
      catchError(this.handleError('signup', null))
    )
  }

  login(data: any): Observable<boolean> {
    return this.http.post(this.apiUrl+"auth/login/", data, this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      map(()=>(true)),
      catchError(this.handleError('login', false))
    )
  }

  doLogin(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    
    return JSON.parse(localStorage.getItem('currentUser')||'{ }');
  }


  getDecodeToken(token: string): any {
    return jwtDecode(token);
  }

token:any={};
  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
    this.token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (this.token.exp > currentTime) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}