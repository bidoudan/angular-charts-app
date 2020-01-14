import {Component, OnInit} from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    {data: [], label: 'Crude oil prices'},
  ];
  lineChartLabels: Label[] = [];
  lineChartOptions = {
    response: true
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)'
    }
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private serviceCompany: CompanyService) {
  }

  ngOnInit() {
    this.loadData(2020);
  }
  loadData(year:number){
    this.serviceCompany.getNbrCommandsByMonth(year).subscribe((data:any)=>{

      data.forEach(command=>{

        this.lineChartLabels.push(command['month']);
        this.lineChartData[0]['data'].push(command['nbrCommands']);
      })
    },err=>{

      alert("Erreur lors du chargement des données!");
    });
  }
}
