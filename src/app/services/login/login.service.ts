import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
