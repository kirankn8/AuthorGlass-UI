import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';

import { AnalyticsComponent } from './analytics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    ChartsModule,
  ],
  providers: [],
  exports: [ ],
})
export class AnalyticsModule { }
