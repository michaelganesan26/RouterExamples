
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { DataComponent } from './../data/data.component';

import { PagenotfoundComponent } from './../pagenotfound/pagenotfound.component';


//when constructing the path routes always put the most relevant path first
//the selection is based on first resolve
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "data", component: DataComponent, data: { title: 'data' } },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // this is the default path (start of the application)
  { path: "**", component: PagenotfoundComponent } // always place this path last, it is a wildcard match
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:false})
  ],
  exports:[
    RouterModule
  ]
})


export class AppRoutingModule { }
