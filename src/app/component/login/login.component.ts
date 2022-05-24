import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import jwt_decode from 'jwt-decode';
import {ActionPerformed, PushNotifications, PushNotificationSchema, Token} from '@capacitor/push-notifications';
import {Notification} from '../../models/notif';
import {NotificationsService} from '../../services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  form1: FormGroup;
  isTypePassword = true;
  formateur: any;
  notif: Notification=new Notification();
  app: any;
  // eslint-disable-next-line max-len
  constructor(public toastController: ToastController,
              public httpClient: HttpClient,
              public navCtrl: NavController ,
              private router: Router,
              private authservice: LoginService,
              private Nservice: NotificationsService) {
    this.initForm();
  }


  initForm() {
    this.form1 = new FormGroup({
      email: new FormControl('',
        {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('',
        {validators: [Validators.required, Validators.minLength(8)]}
      ),
    });
  }
  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    console.log(this.form1.value);
    if(this.form1.valid) {
      this.form1.markAllAsTouched();
    }
      this.authservice.login(this.form1.value).subscribe((res: any)=>{
          localStorage.setItem('mhatlioussema', res.token);
          const token = localStorage.getItem('mhatlioussema');

          if(token) {
            const decoded = jwt_decode(token);

            this.formateur=decoded;
            console.log(this.formateur);
          }
          if(this.formateur.data.isValid) {
            this.router.navigate(['/home']);
            console.log('sa7yt');
//


            console.log('Initializing HomePage');

            // Request permission to use push notifications
            // iOS will prompt user and return if they granted permission or not
            // Android will just grant without prompting
            PushNotifications.requestPermissions().then(result => {
              if (result.receive === 'granted') {
                // Register with Apple / Google to receive push via APNS/FCM
                PushNotifications.register();
              } else {
                // Show some error
              }
            });

            // On success, we should be able to receive notifications
            PushNotifications.addListener('registration',
              (token: Token) => {
                // alert('Push registration success, token: ' + token.value);
                const tokenuser=localStorage.getItem('mhatlioussema');
                if(tokenuser) {
                  const decoded = jwt_decode(tokenuser);

                  this.app=decoded;
                  console.log('ahawma',this.app.data._id);
                }
                this.notif.token=token.value;
                this.notif.idApp=this.app.data._id;
                this.Nservice.createNotifcation(this.notif).subscribe(
                  res=>{
                    console.log('jet');
                  }
                );
              }
            );


            // Some issue with our setup and push will not work
            PushNotifications.addListener('registrationError',
              (error: any) => {
                alert('Error on registration: ' + JSON.stringify(error));
              }
            );

            // Show us the notification payload if the app is open on our device
            PushNotifications.addListener('pushNotificationReceived',
              (notification: PushNotificationSchema) => {
                alert('Push received: ' + JSON.stringify(notification));
              }
            );

            // Method called when tapping on a notification
            PushNotifications.addListener('pushNotificationActionPerformed',
              (notification: ActionPerformed) => {
                alert('Push action performed: ' + JSON.stringify(notification));
              }
            );
            //

          }        else {
            this.toastController.create({
              message: 'votre compte a éte desactivé',
              position: 'bottom',
              cssClass: 'toast-custom-class',
              buttons: [
                {
                  side: 'end',
                  handler: () => {
                    console.log('');
                  }
                }, {
                  side: 'end',
                  text: 'fermer',
                  role: 'cancel',
                  handler: () => {
                    console.log('');
                  }
                }
              ]
            }).then((toast) => {
              toast.present();
            });
          }


        },
      error => {
        this.toastController.create({
          message: 'email ou mot de passe non valide !!',
          position: 'bottom',
          cssClass: 'toast-custom-class',
          buttons: [
            {
              side: 'end',
              handler: () => {
                console.log('');
              }
            }, {
              side: 'end',
              text: 'fermer',
              role: 'cancel',
              handler: () => {
                console.log('');
              }
            }
          ]
        }).then((toast) => {
          toast.present();
        });
      });
  }

}
