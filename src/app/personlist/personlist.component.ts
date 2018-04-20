import { Subscription } from 'rxjs/Subscription';
import { PersonDetail } from './person-detail/person-detail.component';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";


@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit, OnDestroy, AfterViewInit{


  data$: Observable<any>;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.data$ = this.route.queryParams;
  }

  ngAfterViewInit(){
     this.subscription = this.data$.subscribe((params:PersonDetail)=>{
       console.log(params);
     });



  }
  ngOnDestroy() {

      if(!this.subscription){

        this.subscription.unsubscribe();
      }
 



  }


}
