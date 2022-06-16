import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ChapitreService} from '../../services/chapitre.service';
import {Chapitre} from '../../models/chapitre';

@Component({
  selector: 'app-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.scss'],
})
export class ChapitreComponent implements OnInit {
id: string;
  ch: any;
  Search: string;
  constructor(private route: ActivatedRoute,private service: ChapitreService,private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getchapitre(this.id);
  }
 getchapitre(id: string){
  this.service.getch(id).subscribe(
    res=>{
      this.ch=res;
    }
  );
 }

  goToFormation() {
    this.router.navigate(['home/formation'])
  }
}
