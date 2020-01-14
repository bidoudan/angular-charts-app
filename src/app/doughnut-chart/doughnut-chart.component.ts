import {Component, OnInit} from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {CompanyService} from '../company.service';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;

  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;



  dataLoaded = false;
  doughnutChartLabels: Label[] = [] ;
 /* doughnutColors=[
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
  doughnutChartData: MultiDataSet = [
    [],

  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private serviceCompany:CompanyService) { }

  ngOnInit() {
      this.loadData();
  }

  loadData(){
    this.serviceCompany.getCompanies().subscribe((data) => {

      data.forEach(company => {
        this.doughnutChartLabels.push(company['raisonSocial']);
        this.doughnutChartData[0].push(company['nbEmployees']);

      });
      this.dataLoaded = true;

    }, err => {

      alert('Erreur lors du chargement des données!');
    });
  }

}
