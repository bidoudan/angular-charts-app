import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LineChartComponent} from './line-chart/line-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {MenuComponent} from './menu/menu.component';
import {BubbleChartComponent} from './bubble-chart/bubble-chart.component';
import {UploadImagesComponent} from './upload-images/upload-images.component';
import {FileReaderToUploadComponent} from './file-reader-to-upload/file-reader-to-upload.component';


const routes: Routes = [

  { path: 'lineChart', component: LineChartComponent},
  { path: 'barChart', component: BarChartComponent},
  { path: 'pieChart', component: PieChartComponent},
  { path: 'doughnutChart', component: DoughnutChartComponent},
  { path: 'radarChart', component: RadarChartComponent},
  { path: 'bubbleChart', component: BubbleChartComponent},
  { path: 'uploadImage', component: UploadImagesComponent},
  { path: 'upload', component: FileReaderToUploadComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
