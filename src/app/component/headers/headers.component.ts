import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {Notification} from '../../models/notif';
import {NotificationsService} from '../../services/notifications.service';
import {NotiDetailsService} from '../../services/noti-details.service';
import {environment} from '../../../environments/environment';
import {ApprenantService} from '../../services/apprenant.service';

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
  imgUrl = environment.Api + 'files/get/';
  constructor(private router: Router,private Nservice: NotificationsService,
              private notifDeteils: NotiDetailsService,private appservice: ApprenantService
              ) { }

  ngOnInit() {
    const tokenuser = localStorage.getItem('mhatlioussema');
    if (tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.appre = decoded;
      console.log('ahawma', this.appre.data._id);
    }
    this.getappById(this.appre.data._id)
    this.getByvisibility();
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
     console.log('selket');
     this.getByvisibility();
   });
  }
  getByvisibility(){
    this.notifDeteils.getByvis(this.appre.data._id).subscribe(res=>{
      console.log('ahaya',res);
      this.notification=res;
      console.log('toul',this.notification.length);
    });
  }
  getappById(id: string){
this.appservice.getById(id).subscribe(
  res=>{
    this.apprenant=res;
    console.log(this.apprenant,'urhfeourjjjjjjjjjjjjjjjjjjjjjjj')

  }
);
  }
}
