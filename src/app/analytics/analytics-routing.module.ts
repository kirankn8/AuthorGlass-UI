import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnalyticsComponent } from './analytics.component'

const analytics_routes: Routes = [
  { path: '', component: AnalyticsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(analytics_routes)],
    exports: [RouterModule]
  })
  export class AnalyticsRoutingModule {}