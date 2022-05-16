import { Component, OnInit } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import {NotificationsService} from '../../services/notifications.service';
import jwt_decode from "jwt-decode";
import {Notification} from "../../models/notif";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

}
