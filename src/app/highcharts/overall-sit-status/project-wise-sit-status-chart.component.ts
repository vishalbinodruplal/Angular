import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
import { OverallReleaseExecutionStatus } from '../overall-release-execution-status.service';
import { IOverallReleaseStatus } from '../overall-release-status/overall-release-status';
import { element } from 'protractor';
highcharts3D(Highcharts);

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-project-wise-sit-status-chart',
  templateUrl: './project-wise-sit-status-chart.component.html',
  styleUrls: ['./project-wise-sit-status-chart.component.css']
})
export class ProjectWiseSitStatusChartComponent implements OnInit{

   overAllSitStatus: IOverallReleaseStatus[];
   errorMessage: string;

   highcharts = Highcharts;
   chartOptions;

   constructor( private getOverallSitStatus: OverallReleaseExecutionStatus) { }

   ngOnInit(): void {

      this.getOverallSitStatus.getOverallReleaseExecutionStatus().subscribe({
         next: overAllSitStatus => {
            this.overAllSitStatus = overAllSitStatus;
            let dataArrForPassed = overAllSitStatus.map(overAllSitStatus => overAllSitStatus.passPercent);
            let dataArrForFailed = overAllSitStatus.map(overAllSitStatus => overAllSitStatus.failPercent);
            let axisValue = overAllSitStatus.map(overAllSitStatus => overAllSitStatus.releaseTime);

         //    this.overAllSitStatus.forEach(element => {
         //       console.log("vishal : " + element.passPercent);
         // })

         this.highcharts = Highcharts;
         this.chartOptions = {
            chart: {
            renderTo: 'graph-size',
            type: 'column',   
            margin: 75,
            height: 300,
         
            options3d: {
               enabled: true,
               alpha: 15,
               beta: 15,
               depth: 50,
               viewDistance: 25
            }
         },
         credits: {
         enabled: false
         },
         title : {
            text: 'Overall SIT Status'   
         },
         plotOptions : {
            column: {
               depth: 25
            }
         },
         xAxis:{
            categories: axisValue
         },
         yAxis: {          
            title:{
               text:"Execution %"
            }
         },
         series : [
         {
               name: 'Passed',
               data: dataArrForPassed
         },
         {
               name: 'Failed',
               color: '#ff7f7f',
               data: dataArrForFailed
         }
         ]
   };
         },
         error: err => this.errorMessage = err
      });  
   }

}
