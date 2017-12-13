import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

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
