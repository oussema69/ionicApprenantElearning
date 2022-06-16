import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  imgUrl = environment.Api + 'files/get/';
fic: string;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.fic = this.route.snapshot.params.fic;
  }

  goToForm() {
    const idf=localStorage.getItem('idf')
    this.router.navigate(['home/chapitre/'+idf])
  }
}
