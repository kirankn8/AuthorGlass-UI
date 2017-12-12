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
 

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [ ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';



  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
