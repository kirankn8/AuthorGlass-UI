import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuggestComponent } from './searchandsuggest/suggest.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuggestComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
