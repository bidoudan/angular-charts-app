import { Component, OnInit } from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
 /* pieColors=[
    {
      backgroundColor: [
        'rgba(110, 114, 20, 1)',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)',
        'rgba(129, 78, 40, 1)',
        'rgba(129, 199, 111, 1)'
      ]
    }
  ];*/
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  dataLoaded = false;
  constructor(private serviceCompany: CompanyService) {
    monkeyPatchChartJsLegend();
    monkeyPatchChartJsTooltip();
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.serviceCompany.getCompanies().subscribe((data) => {

      data.forEach(company => {
        this.pieChartLabels.push(company['raisonSocial']);
        this.pieChartData.push(company['nbEmployees']);

      });
    this.dataLoaded =  true;
    }, err => {

      alert('Erreur lors du chargement des données!');
    });
  }

}
