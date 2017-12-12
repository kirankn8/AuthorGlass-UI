import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SuggestComponent } from './common/suggest/suggest.component';
import { FooterComponent } from './common/footer/footer.component'

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';
import { StoryModule } from './story/story.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { SearchComponent } from './search/search.component';
import { CardBookComponent } from './shared/components/card-book/card-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuggestComponent,
    FooterComponent,
    SearchComponent,
    CardBookComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoryModule,
    AuthenticationModule,
    HomeModule,
    AnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
