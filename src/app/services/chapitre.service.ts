import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chapitre} from '../models/chapitre';

@Injectable({
  providedIn: 'root'
})
export class ChapitreService {
  api=environment.Api+'chapiters';
  api1=environment.Api+'ressources';

  constructor(private http: HttpClient) { }
  getch(id): Observable<Chapitre>{
    return this.http.get<Chapitre>(`${this.api}/findch/${id}`);
  }
  getByCh(ch: string): Observable<any> {
    return this.http.get<any>(`${this.api1}/findch/${ch}`);
  }
}
