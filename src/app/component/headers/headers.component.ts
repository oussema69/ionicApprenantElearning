import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {Notification} from '../../models/notif';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {
  notif: Notification=new Notification();
  app: any;
  constructor(private router: Router,private Nservice: NotificationsService) { }

  ngOnInit() {}

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
}
