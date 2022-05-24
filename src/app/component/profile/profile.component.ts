import {Component, OnInit, ViewChild} from '@angular/core';
import jwt_decode from 'jwt-decode';
import {ApprenantService} from '../../services/apprenant.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IonSlides} from '@ionic/angular';
import {environment} from '../../../environments/environment';
import {Apprenant} from '../../models/apprenant';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  app: any;
 apprenant: Apprenant;
 apprenantup: Apprenant=new Apprenant();

 name:string;
 lastname:string;
 tel:number;
 password:string;
 email:string;
  @ViewChild('mySlider')  slides: IonSlides;
  swipeNext(){
    this.slides.slideNext();
  }
  decoded: any;

  form: FormGroup;
logo:string;
  imgUrl = environment.Api + 'files/get/';
  selectedFile: any;
  file: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
   constructor(private appservice: ApprenantService,private fileservice:FileService) {
   

   }

  ngOnInit() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
      console.log('ahawma',this.app.data._id);
    }
    this.appservice.getappById(this.app.data._id).subscribe(
      res=>{
        console.log('yamalasmerdouni',res);
        this.apprenant=res;
        console.log('yamalasmermouchydouni',this.apprenant);
   this.name=this.apprenant.name
   this.lastname=this.apprenant.lastname
   this.email=this.apprenant.email
   this.password=this.apprenant.password
   this.tel=this.apprenant.tel
   this.apprenantup.logo=this.apprenant.logo
        console.log(this.name,'nikomhom houma')
      }
    );
  }
  getuser(){

  }
 
  onSubmit() {
    if(this.file==undefined){
     if(this.email==''||this.name.length==0||this.lastname.length==0||this.password.length<7||this.tel<100000000 &&this.tel>99999999){
       alert('champs non valide')
     }else{
      this.apprenantup.email=this.email
      this.apprenantup.lastname=this.lastname
      this.apprenantup.tel=this.tel
      this.apprenantup.name=this.name
      this.apprenantup.logo=this.apprenant.logo
      this.appservice.update(this.apprenant._id,this.apprenantup).subscribe(
        res=>{
                alert('champs mise a jour')

        }
      )
    }
    }
    else{
      if(this.email==''||this.name.length==0||this.lastname.length==0||this.password.length<7||this.tel<100000000 &&this.tel>99999999){
        alert('champs non valide')
      }else{
this.fileservice.upload(this.file).subscribe(
  res=>{
    this.apprenantup.email=this.email
    this.apprenantup.lastname=this.lastname
    this.apprenantup.tel=this.tel
    this.apprenantup.name=this.name
    this.apprenantup.logo=res.filename
    this.appservice.update(this.apprenant._id,this.apprenantup).subscribe(
      res=>{
        alert('champs mise a jour')
      }
    )
  
  }
)
      }
}
  }
  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

}


















