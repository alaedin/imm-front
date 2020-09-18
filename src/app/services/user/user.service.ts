import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

const baseUrl = environment.proxyUrl + '/' + environment.authService + '/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(baseUrl);
  }

  create(data): Observable<any> {
    return this.httpClient.post(`${baseUrl}/sign-up`, data);
  }

  authentiction(data): Observable<any> {
    return this.httpClient.post(`${baseUrl}/sign-in`, data);
  }

}
