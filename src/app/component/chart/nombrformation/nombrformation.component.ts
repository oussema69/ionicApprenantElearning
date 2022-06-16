import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {StatistiqueService} from '../../../services/statistique.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-nombrformation',
  templateUrl: './nombrformation.component.html',
  styleUrls: ['./nombrformation.component.scss'],
})
export class NombrformationComponent implements OnInit {
app:any
  year=2022;
  a!: number;

  public barChartType: ChartType = 'bar';

  constructor(private statservice: StatistiqueService) { }

  ngOnInit(): void {
    const tokenuser=localStorage.getItem('mhatlioussema');
    if(tokenuser) {
      const decoded = jwt_decode(tokenuser);

      this.app=decoded;
    }
    this.get()
  }

  get() {
    this.year=this.year;
    this.barChartData[0].data=[];
    let i = 1;
    do {




      this.statservice.getvisiobyappmonth(i,this.year,this.app.data._id).subscribe(res=>{
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
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'visioconférence ' }
  ];
}
