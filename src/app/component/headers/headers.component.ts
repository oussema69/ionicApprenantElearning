import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {Notification} from '../../models/notif';
import {NotificationsService} from '../../services/notifications.service';
import {NotiDetailsService} from '../../services/noti-details.service';
import {environment} from '../../../environments/environment';
import {ApprenantService} from '../../services/apprenant.service';
import {MessagesService} from '../../services/messages.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {
  notif: Notification=new Notification();
  app: any;
  appre: any;
  notification: any;
  apprenant: any;
  msgnbr: number;
  imgUrl = environment.Api + 'files/get/';
  constructor(private router: Router,private Nservice: NotificationsService,
              private notifDeteils: NotiDetailsService,private appservice: ApprenantService,private msgservice: MessagesService
              ) { }

  ngOnInit() {
    const tokenuser = localStorage.getItem('mhatlioussema');
    if (tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.appre = decoded;
    }
    this.getappById(this.appre.data._id);
    this.getByvisibility();
    this.msgservice.countbyform(this.appre.data._id).subscribe(res=>{
      this.msgnbr=res;
      console.log(this.msgnbr);
      console.log('omamamamam');
    });
  }
  logout() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
    }

this.Nservice.getNotifToken(this.app.data._id).subscribe(res=>{
  this.Nservice.delieteNotif(res._id).subscribe(data=>{

  },err=>{
  });
});
    localStorage.removeItem('mhatlioussema');
    this.router.navigate(['']);


  }

  go() {
    this.router.navigate(['home/notif']);

  }

  updatevis() {
   this.notifDeteils.updateVis(this.appre.data._id).subscribe(res=>{
     this.getByvisibility();
   });
  }
  getByvisibility(){
    this.notifDeteils.getByvis(this.appre.data._id).subscribe(res=>{
      this.notification=res;
    });
  }
  getappById(id: string){
this.appservice.getById(id).subscribe(
  res=>{
    this.apprenant=res;

  }
);
  }

  gomsg() {
    this.router.navigate(['home/msg']);
this.updatevismsg();
  }

  reload() {
    window.location.reload();

  }
  updatevismsg() {

  }

}
