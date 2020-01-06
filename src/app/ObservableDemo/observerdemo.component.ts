import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'ObserverdemoComp-app',
	template: `
	  <b>Angular 6 Component Using Observables!</b>
	 
	  <h6 style="margin-bottom: 0">VALUES:</h6>
	  <div *ngFor="let value of values">- {{ value }}</div>
	  
	  <h6 style="margin-bottom: 0">STATUS:</h6>
	  <div>{{status}}</div>
	  
	  <button style="margin-top: 2rem;" (click)="ngOnInit()">Init</button>
	`
})
export class ObserverdemoComp implements OnInit{
  
   data: Observable<number>;
   values: Array<number> = [];
   anyErrors: boolean;
   finished: boolean;
   status:string;
  constructor() {}
  
  ngOnInit() {
      this.data = new Observable(observer => {
          setTimeout(() => {
              observer.next(42);
          }, 1000);
          
          setTimeout(() => {
              observer.next(43);
          }, 2000);

          setTimeout(() => {
            observer.next(44);
        }, 3000);
          
          setTimeout(() => {
              observer.complete();
          }, 3500);
          
          this.status = "Started";
      });

      let subscription = this.data.forEach(v => this.values.push(v))
		    .then(() => this.status = "Ended");
  }

}