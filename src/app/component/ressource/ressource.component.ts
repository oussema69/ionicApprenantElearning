import {Component, Input, OnInit} from '@angular/core';
import {ChapitreService} from '../../services/chapitre.service';
import { CommonModule } from '@angular/common';
import {FileService} from '../../services/file.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import { Plugins } from '@capacitor/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
const { Browser } = Plugins;
@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss'],
})
export class RessourceComponent implements OnInit {
  api=environment.Api;
  @Input()
  chapitre: any;
  ressource: any;

  constructor(private service: ChapitreService, private fileservice: FileService,
              private router: Router) {
  }

  ngOnInit() {
    this.getch(this.chapitre._id);
    localStorage.setItem('idf',this.chapitre.formation);

  }

  getch(id: string) {
    this.service.getByCh(id).subscribe(
      res => {
        this.ressource = res;
      }
    );

  }

  download(fic: any) {
    const path=this.api+'files/as/'+fic;
window.open(path);
  }

  goTopdf(fic: string) {
const patha=this.api+'files/get/'+fic;
    window.open(patha);
  }

  goTovid(fic: string) {
    this.router.navigate(['home/vid/'+fic]);
  }

  goToimg(fic: string) {
    this.router.navigate(['home/img/'+fic]);


  }
}
