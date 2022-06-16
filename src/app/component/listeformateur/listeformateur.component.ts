import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {MessagesService} from '../../services/messages.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-listeformateur',
  templateUrl: './listeformateur.component.html',
  styleUrls: ['./listeformateur.component.scss'],
})
export class ListeformateurComponent implements OnInit {
@Input()
form: any;
  idM!: string;
  countmsg!: number;
  app: any;
  imgUrl = environment.Api + 'files/get/';

  constructor(private router: Router,private msgservice: MessagesService) { }

  ngOnInit() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
      console.log(this.app.data._id);
    }
    this.countmsga();

  }
  consulter() {
    this.router.navigate(['home/msgd/'+this.form._id]);
    this.msgservice.viewd(this.idM,this.form._id).subscribe(res=>{

    });
    this.countmsga();


  }
  countmsga() {
    this.msgservice.getbyidF(this.form._id,this.app.data._id).subscribe(res=> {
        if(res._id){
          this.idM=res._id;
          this.msgservice.countmessagesform(res._id,this.form._id).subscribe(res=>{
            console.log('manajmtch nbatelha',res);
            this.countmsg=res;
            console.log('manajmtch nbatelha tw nbatekha',this.countmsg);

          });
        }
      }
    );
  }
}
