import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HouseTypeService {
  public uri = ''; // environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.uri);
  }

  get(id): Observable<any>{
    return this.http.get('${uri}/${id}');
  }

  create(data): Observable<any>{
    return this.http.post(this.uri, data);
  }

  update(id, data): Observable<any>{
    return this.http.put('${uri}/${id}', data);
  }

  delete(id): Observable<any>{
    return this.http.delete('${uri}/${id}');
  }

  deleteAll(): Observable<any>{
    return this.http.delete(this.uri);
  }

  getByHouseTypeName(houseTypeName): Observable<any>{
    return this.http.get(`${this.uri}?houseTypeName=${houseTypeName}`);
  }
}
