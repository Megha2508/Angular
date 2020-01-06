import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  template:`<br>
  Details: 
  This {{Name}} is of price {{Price}} with discount of {{Discount}}%` 
})
export class PDetailsComponent{
  id:any
  nm:any
  pr:any
  ds:any
  paramsSub:any
  paramsSub1:any
  public selectedTr:string
  public Name:string
  public Price:string
  public Discount:string
  constructor(private activatedRoute: ActivatedRoute) {}
  
  private ngOnInit() {
      this.paramsSub=this.activatedRoute.params.subscribe(
          params => {
            this.selectedTr=params['id']
          })
      this.paramsSub1=this.activatedRoute.queryParams.subscribe(
        (queryparams: Params)=> {
          this.Name=queryparams['nm'],
          this.Price=queryparams['pr'],
          this.Discount=queryparams['ds']
        })
  }

  ngOnDestroy(){
      this.paramsSub.unsubscribe()
  }
}