import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Notification} from "../models/notif";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  api = environment.Api + 'notification';
  constructor(private http: HttpClient) {

  }
  createNotifcation(data){

      return this.http.post(`${'http://192.168.35.184:3000/notification'}/`,data);


  }
  getNotifToken(id: string): Observable<Notification>{
    return this.http.get<Notification>(`${'http://192.168.35.184:3000/notification/'}${id}`);
  }
  delieteNotif(id: string){
    return this.http.delete(`${'http://192.168.35.184:3000/notification/'}${id}`);
  }

}
