import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';

import { HomeModule } from './home/home.module';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'story', loadChildren: 'app/story/story.module#StoryModule' },
  { path: 'authentication', loadChildren: 'app/authentication/authentication.module#AuthenticationModule' },
  { path: 'analytics', loadChildren: 'app/analytics/analytics.module#AnalyticsModule' },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}