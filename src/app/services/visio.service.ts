import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisioService {
  api = environment.Api + 'formateurs/rooms';

  constructor(private http: HttpClient) { }
  getRoomById(idR: string,data: any): Observable<any>{
    return this.http.post(`${this.api}/${idR}`,data);

  }
}
