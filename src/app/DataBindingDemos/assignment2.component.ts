import { Component } from '@angular/core';

@Component({
  selector: 'Assignment2',
  templateUrl: './assignment2.component.html'
})
export class Assignment2Component {
    flag:boolean=false
    check():boolean{
        return this.flag=false
      }
    n1:number
    n2:number
    result:number
    Add(){
        this.result=this.n1+this.n2
        this.flag=true
    }
    Sub(){
        this.result=this.n1-this.n2
        this.flag=true
    }
    Mul(){
        this.result=this.n1*this.n2
        this.flag=true
    }
    Div(){
        this.result=this.n1/this.n2
        this.flag=true
    }
}