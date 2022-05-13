import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController, ToastController} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  {
  form1: FormGroup;
  isTypePassword = true;
  formateur: any;
  // eslint-disable-next-line max-len
  constructor(public toastController: ToastController,public httpClient: HttpClient,public navCtrl: NavController , private router: Router, private authservice: LoginService) {
    this.initForm();
  }

  goto(){
    this.router.navigate(['signup']);
    localStorage.removeItem('token');
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
