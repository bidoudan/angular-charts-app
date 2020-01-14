import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {CompanyService} from '../company.service';
import {Company} from '../models/company.model';
import {FileUploader} from 'ng2-file-upload';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  companiess:any;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Number of Commands' }
  ];
  dataLoaded = false;
  constructor(private serviceCompany: CompanyService) { }

  ngOnInit() {
    this.loadData(2020);

  }

  loadData(year:number){
    this.serviceCompany.getNbrCommandsByMonth(year).subscribe((data:any)=>{

      data.forEach(command=>{

        this.barChartLabels.push(command['month']);
        this.barChartData[0]['data'].push(command['nbrCommands']);
      })
    },err=>{

      alert("Erreur lors du chargement des données!");
    });
  }




}
