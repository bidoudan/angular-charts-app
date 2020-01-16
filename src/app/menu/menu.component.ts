import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLineChart(){
    this.router.navigate(['/lineChart']);
  }
  goToBarChart(){
    this.router.navigate(['/barChart']);

  }
  goToRadarChart(){
    this.router.navigate(['/radarChart']);

  }
  goToDoughnutChart(){
    this.router.navigate(['/doughnutChart']);
  }
  goToPieChart(){
    this.router.navigate(['/pieChart']);
  }
  goToBubbleChart(){
    this.router.navigate(['/bubbleChart']);
  }
  goToUploadImage(){
    this.router.navigate(['/upload']);
  }
}
