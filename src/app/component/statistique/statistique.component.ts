import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import jwt_decode from 'jwt-decode';
import {StatistiqueService} from '../../services/statistique.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss'],
})
export class StatistiqueComponent implements OnInit {
  year=2022;
app: any;
a: number;
  constructor(private statservice: StatistiqueService) { }

  ngOnInit() {

    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
    }
    this.get();
  }
  get() {
    this.year=this.year;
    this.barChartData[0].data=[];
    let i = 1;
    do {




      this.statservice.getformbyappmonth(i,this.year,this.app.data._id).subscribe(res=>{
        this.a=res;
        this.barChartData[0].data?.push( this.a);


      });
      i++;
    }
    while (i< 13);
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['janvier', 'février', 'mars', 'avril', 'mai','juin','juillet','aout','septembre','octrobre','novembre','decembre'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'formation' }
  ];




}
