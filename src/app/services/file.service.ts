import { Injectable } from '@angular/core';
 import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
 
@Injectable({
  providedIn: 'root'
})
export class FileService {
api = environment.Api+'files' ;
  constructor(private  http:HttpClient) {

  }

  upload(file : File   ):Observable<any>{
    const formData = new FormData();
    formData.append('file' , file); 

    return this.http.post( this.api+'/upload',formData);
  }

 
   

  

 
}
