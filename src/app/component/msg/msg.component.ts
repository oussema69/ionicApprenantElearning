import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApprenantService} from '../../services/apprenant.service';
import {FormateurService} from '../../services/formateur.service';
import {environment} from '../../../environments/environment';
import {MessagesService} from '../../services/messages.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {
id!: string;
form: any;
app: any;
appr:any
  messages: any;

  messageapp: any;
  message!: string;

  imgUrl = environment.Api + 'files/get/';
  msg!: string;

  constructor(private router: ActivatedRoute ,private fservice: FormateurService,private msgservice: MessagesService) { }

  ngOnInit() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
      console.log(this.app.data._id);
    }
    this.id = this.router.snapshot.params.id;
    console.log(this.id);
    this.fservice.getbyid(this.id).subscribe(res=>{
this.form=res;
    });
    this.getidf(this.id,this.app.data._id)

  }

  getidf(ids: string,idr: string){
    this.msgservice.getbyidF(ids,idr).subscribe(res=> {
        this.messageapp = res;
      this.messages=this.messageapp.messages;
        console.log(this.messages)

      }
    );
  }
  send() {

    this.msgservice.verif(  this.id,this.app.data._id).subscribe(res=>{
      if(res==null){
        const messages={
          idS: this.id,
          idR:this.app.data._id,
          messages: [{ msg: this.msg, ids: this.app.data._id }]
        };


        this.msgservice.sendmessage(messages).subscribe(data=>{
          this.getidf(this.id,this.app.data._id)
          this.msg=''
        });
console.log('wasa3 belk',res);



      }else{
        console.log('matwasa3ch',res);
        this.msgservice.pushmsg(res._id,this.msg,this.app.data._id).subscribe(
          res=>{
            this.getidf(this.id,this.app.data._id)
            this.msg=''

          }
        );

      }
    });
  }
}
