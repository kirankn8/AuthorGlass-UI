import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { dashboardAppsList } from './dashboard-apps-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  dashboardApps = dashboardAppsList;
  
  constructor() { }

  ngOnInit() {
  }

  // pieChart
  public pieChartData:Array<any> =[{
    data: [100, 20, 30, 40, 50,]
  }];

  public pieChartLabels:Array<any> = ['January', 'February', 'March', 'January', 'February',];

  public pieChartOptions:any = {
    responsive: true
  };

  public pieChartColors:Array<any> = [];

  public pieChartLegend:boolean = true;
  public pieChartType:string = 'doughnut';
 
}
