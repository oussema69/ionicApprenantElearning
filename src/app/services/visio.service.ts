import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VisioService {

  constructor(private http: HttpClient) { }
  getRoomById(idR: string,data: any):Observable<any>{
    return this.http.post(`${'http://localhost:3000/formateurs/rooms'}/${idR}`,data);

  }
}
