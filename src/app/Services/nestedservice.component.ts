import { Component, OnInit } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'nested-service',
  template: `<Div><p>Nested Service result</p>
  <p>{{msg}}</p></Div>`
})
export class NestedServiceComponent implements OnInit {
    msg:string
    constructor(private mserv:MyService){}
    ngOnInit(){
        this.msg=this.mserv.getTextFromOtherService()
    }
}