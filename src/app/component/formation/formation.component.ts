import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {FormationService} from '../../services/formation.service';
import {ApprenantService} from '../../services/apprenant.service';
import {Formation} from '../../models/formation';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
app: any;
  allform: any;
  formation: Formation[]=[];
  imgUrl = environment.Api + 'files/get/';
  Search!: string;

  constructor(private formationService: FormationService,
              private appservice: ApprenantService,private route: Router) { }

  ngOnInit() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
    }
    this.getFormation();
  }
   getFormation(){
  this.appservice.getappById(this.app.data._id).subscribe(res=>{
     this.allform=res.formations;
    for (const i of this.allform) {
      this.formationService.getById(i).subscribe(
        res=>{
          this.formation.push(res);
        }
      );
    }

    });
   }

  goTochap(id: string) {
    this.route.navigate(['home/chapitre/' + id]);
  }
}
