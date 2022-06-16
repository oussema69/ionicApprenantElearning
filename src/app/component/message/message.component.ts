import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
form: any;
  imgUrl = environment.Api + 'files/get/';
  Search!: string;

  constructor(private msgservice: MessagesService,private router:Router) { }

  ngOnInit() {
    this.msgservice.getformateur().subscribe(res=>{
      this.form=res;
    });

  }


}
