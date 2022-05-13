import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
@Component({
  selector: 'app-visio',
  templateUrl: './visio.component.html',
  styleUrls: ['./visio.component.scss'],
})
export class VisioComponent implements OnInit {
  public safeSrc: SafeResourceUrl;
  id!: string;
  meet='https://elearning.yourvideo.live/';
  constructor(private route: ActivatedRoute,private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.meet=this.meet+this.id;
    console.log('lid mta3 zeby',this.meet);
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.meet);
  }

}
