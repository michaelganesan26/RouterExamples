
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

//Routing Modules 
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PersonlistModule } from './personlist/personlist.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    PersonlistModule, //the order of the modules is important
    AppRoutingModule // Always import this module the last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
