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
    return this.http.post(`${'http://192.168.35.184:3000/formateurs/rooms'}/${idR}`,data);

  }
}
