import { RouterModule, Routes, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { PersonlistComponent } from './../personlist.component';

const personRoutes: Routes = [
  { path: "personlist", component: PersonlistComponent },
  {
    path: "person-detail/:id",
    component: PersonDetailComponent,
    data: { title: 'Person Detail Info' },
    outlet: "sidebar" //map this to the auxiliary router-outlet
  },
  {
    path: "person-detail-main/:id",
    component: PersonDetailComponent,
    data: { title: 'Person Detail Info' } //map this to the main outlet
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(personRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonRoutingModule { }
