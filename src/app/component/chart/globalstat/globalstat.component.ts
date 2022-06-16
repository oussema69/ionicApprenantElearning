import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {StatistiqueService} from '../../../services/statistique.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-globalstat',
  templateUrl: './globalstat.component.html',
  styleUrls: ['./globalstat.component.scss'],
})
export class GlobalstatComponent implements OnInit {
app: any;
  nbrvis: number;
nbrhvis: number;
  nbrform: number;
  nbrheureform: any;
  constructor(private statservice: StatistiqueService) { }

  ngOnInit() {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
    }
    this.statservice.getvisioapp(this.app.data._id).subscribe(res=>{
      this.nbrvis=res;
      this.radarChartData[0].data?.push(this.nbrvis)

    });
    this.statservice.getvisioappheure(this.app.data._id).subscribe(res=>{
      this.nbrhvis=res;
      this.radarChartData[0].data?.push(this.nbrhvis)

    });
    this.statservice.getforapp(this.app.data._id).subscribe(res=>{
      this.nbrform=res;
      this.radarChartData[0].data?.push(this.nbrform)

    });
    this.statservice.getforappheure(this.app.data._id).subscribe(res=>{
      this.nbrheureform=res;
      this.radarChartData[0].data?.push(this.nbrheureform)

    });

  }
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['nombre de visioconference','Nombre de formation',
    'nombre heure des formation', 'nombre heure de visioconference'];

  public radarChartData: ChartDataSets[] = [
    { data: [  ], label: 'statistique generale' }
  ];
  public radarChartType: ChartType = 'radar';

}
