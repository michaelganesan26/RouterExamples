import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonlistComponent } from './personlist.component';
import { PersonRoutingModule } from './person-routing/person-routing.module';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonRoutingModule
  ],
  declarations: [
    PersonlistComponent,
    PersonDetailComponent
  ],
  providers:[]
})


export class PersonlistModule { }
