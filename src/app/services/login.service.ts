import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api = environment.Api + 'apprenants/login';
  constructor(private http: HttpClient) {
  }
  login(data: any){
    return this.http.post(this.api, data);

  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  static loggedIn(): boolean{
    const token= localStorage.getItem('mhatlioussema');
    if (token){
      return true;
    }
    return false;
  }
}
