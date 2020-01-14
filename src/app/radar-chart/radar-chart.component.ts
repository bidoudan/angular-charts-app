import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartType, RadialChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = [];

  public radarChartData: ChartDataSets[] = [
    { data: [], label: 'Employee Skill Analysis' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor(private serviceCompany:CompanyService) { }

  ngOnInit() {
   this.loadData(2020)
  }

  loadData(year:number){
    this.serviceCompany.getNbrCommandsByMonth(year).subscribe((data:any)=>{

      data.forEach(command=>{

        this.radarChartLabels.push(command['month']);
        this.radarChartData[0]['data'].push(command['nbrCommands']);
      })
    },err=>{

      alert("Erreur lors du chargement des données!");
    });
  }
}
