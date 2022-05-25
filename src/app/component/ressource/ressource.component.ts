import {Component, Input, OnInit} from '@angular/core';
import {ChapitreService} from '../../services/chapitre.service';
import { CommonModule } from '@angular/common';
import {FileService} from '../../services/file.service';
@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss'],
})
export class RessourceComponent implements OnInit {
@Input()
chapitre: any;
  ressource: any;
  constructor(private service: ChapitreService,private fileservice: FileService) { }

  ngOnInit() {
    this.getch(this.chapitre._id);
    console.log(this.chapitre,'gggggggggggggggggggggggggggggggggggggggg');
  }
getch(id: string){
    this.service.getByCh(id).subscribe(
      res=>{
        this.ressource=res;
        console.log('jjjjjj',res);
      }
    );

}

  download(fic: any) {
    console.log('jwk  w7chyneh',fic);

    this.fileservice.download(fic).subscribe(
  res=>{
    const body = res.json();
    console.log('jwk behy selket w7chyneh');
    return body || [];
  }
);
  }
}


