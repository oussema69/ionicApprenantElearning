import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprenant} from '../models/apprenant';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {
  api = environment.Api + 'apprenants';
  constructor(private http: HttpClient) { }
  getappById(id: string): Observable<any>{
   return this.http.get<any>(`${this.api}/${id}`);
  }
  update(id: string,data: any){
    return this.http.put(`${this.api}/${id}`,data);
  }
  getById(id: string): Observable<Apprenant>{
    return this.http.get<Apprenant>(`${this.api}/${id}`);
  }
}

