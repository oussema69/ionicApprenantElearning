import { Component, OnInit } from '@angular/core';
import {NotiDetailsService} from '../../services/noti-details.service';
import {NotifDetails} from '../../models/NotifDetails';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
 notif: any[];
 app: any;
  constructor(private notifservice: NotiDetailsService) { }

  ngOnInit() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
      console.log('ahawma',this.app.data._id);
    }
    this.getall(this.app.data._id);
  }

getall(idApp: string){
    this.notifservice.getAllNotification(idApp).subscribe(res=>{

      this.notif=res;

      console.log(this.notif);
    });
}
}
