import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NotifDetails} from '../models/NotifDetails';

@Injectable({
  providedIn: 'root'
})
export class NotiDetailsService {
  api = environment.Api + 'notif-details';
  constructor(private http: HttpClient) { }
  getAllNotification(idApp: string): Observable<any>{
    return this.http.get<any>(`${this.api}/app/${idApp}`);
  }
  updateVis(idApp: string){
    return this.http.put(`${this.api}/${idApp}`,{});
  }
  getByvis(idApp:string){
    return this.http.get(`${this.api}/vis/${idApp}`)
  }
}
