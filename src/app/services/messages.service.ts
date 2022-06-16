import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
api=environment.Api;
  constructor(private http: HttpClient) { }
getformateur(): Observable<any>{
   return this.http.get<any>(`${this.api}formateurs`);
}
  verif(ids: string,idR: string): Observable<any>{
    return this.http.get(`${this.api}message/ver/${ids}/${idR}`);
  }
  sendmessage(data: any): Observable<any>{
    return this.http.post<any>(`${this.api}message`,data);
  }
  pushmsg(id: string,msg: string,ids: string){
    return this.http.put(`${this.api}message/${id}/${msg}/${ids}`,{});
  }
  getbyidF(ids: string,idR: string): Observable<any>{
    return this.http.get(`${this.api}message/getmsg/${ids}/${idR}`);
  }
  countbyform(idf: string): Observable<number>{
    return this.http.get<number>(`${this.api}message/countmsg/${idf}`);
  }
  updatevis(idf: string){
    return this.http.put(`${this.api}message/upd/${idf}`,{});
  }
  countmessagesform(idM: string, idF: string): Observable<number>{
    return this.http.get<number>(`${this.api}message/countmsgbyuser/${idM}/${idF}`);
  }
  viewd(idM:string, idF:string){
    return this.http.patch(`${this.api}message/viwed/${idM}/${idF}`,{})
  }
}
