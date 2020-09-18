import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // public uri = environment.baseUrl + '/login';

  constructor(private http: HttpClient) { }
/*
  login(loginPayload): Observable<any>{
    return this.http.post()
  }
*/
}
