import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Formation} from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
api=environment.Api+'formations';
  constructor(private http: HttpClient) { }
  getById( id: string): Observable<Formation>{
    return this.http.get<Formation>(`${this.api}/${id}`);
  }
}
