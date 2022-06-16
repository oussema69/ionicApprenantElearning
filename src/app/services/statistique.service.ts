import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
api=environment.Api;
  constructor(private http: HttpClient) { }
  getformbyappmonth(mois: number,year: number,idAPP: string): Observable<number>{
    return this.http.get<number>(`${this.api}formations/countMApp/${mois}/${year}/${idAPP}`);
  }
  getappstat(mois: number,year: number): Observable<number>{
    return this.http.get<number>(`${this.api}apprenants/count/${mois}/${year}`);
  }
  getvisiobyappmonth(mois: number,year: number,idAPP: string): Observable<number>{
    return this.http.get<number>(`${this.api}visio/countMApp/${mois}/${year}/${idAPP}`);
  }
  //
  getvisioapp(idApp: any): Observable<number>{
    return this.http.get<number>(`${this.api}visio/getvisapp/${idApp}`);
  }
  getvisioappheure(idApp: any): Observable<number>{
    return this.http.get<number>(`${this.api}visio/minapp/${idApp}`);
  }
  getforapp(idApp: any): Observable<number>{
    return this.http.get<number>(`${this.api}formations/coufor/${idApp}`);
  }
  getforappheure(idApp: any): Observable<number>{
    return this.http.get<number>(`${this.api}formations/minapp/${idApp}`);
  }
}
