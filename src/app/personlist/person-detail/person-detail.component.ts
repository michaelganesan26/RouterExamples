import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, AfterViewInit, OnDestroy, AfterContentInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Subscription } from 'rxjs/Subscription';

export interface PersonDetail {
  id: number;
  name: string;
}


@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})

export class PersonDetailComponent implements OnInit, AfterContentInit, AfterViewInit, OnDestroy {

  persons: PersonDetail[] = [
    { id: 1, name: "Smith Jones" },
    { id: 2, name: "David James" },
    { id: 3, name: "Samuel Jackson" },
    { id: 4, name: "Mark Pulliam" }
  ];

  personSelected: PersonDetail;
  data$: Observable<any>;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngAfterViewInit() {





  }

  ngAfterContentInit() {




  }

  ngOnInit() {
    // this.data$ = this.route.paramMap.map((params: ParamMap) => {
    //   return (params.get("id"));
    // });
    // let id:number = parseInt(this.route.snapshot.paramMap.get("id"));
    // console.log(`Your id is : ${id}`);
    // this.personSelected = this.persons.find(x=>x.id === id);

    // this.subscription = this.data$.subscribe(x => {
    //   let id: number = parseInt(x);
    //   this.personSelected = this.persons.find(x => x.id === id);

    // });

    this.data$ = this.route.paramMap.map((params: ParamMap) => {
      return (params.get("id"));
    });
    this.subscription = this.data$.subscribe(x => {
      let id: number = parseInt(x);
      console.log(`Your person id is: ${id}`);
      this.personSelected = this.persons.find(x => x.id === id);

    });

  }

  navigateToPersonList() {
    this.router.navigate(["/personlist"], { queryParams: { id: this.personSelected.id, name: this.personSelected.name, foo: "foo data" } });

  }

  ngOnDestroy() {

    if (!this.subscription) {
      this.subscription.unsubscribe();

    }

  }


}
