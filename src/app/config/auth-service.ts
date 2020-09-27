import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

const baseUrl = environment.proxyUrl + '/' + environment.authService + '/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    return this.getToken() !== null;
  }


  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false;
  }

  authenticate(data): Observable<any> {
    return this.httpClient.post(`${baseUrl}/sign-in`, data);
  }

  signUp(data): Observable<any> {
    return this.httpClient.post(`${baseUrl}/sign-up`, data);
  }

  logout(): void {
    const removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['connexion']);
    }
  }
}
