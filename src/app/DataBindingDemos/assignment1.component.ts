import { Component } from '@angular/core';

@Component({
  selector: 'Assignment1',
  templateUrl: './assignment1.component.html'
})
export class Assignment1Component {
    flag:boolean
    check():boolean{
      return this.flag=false
    }
    n:number
    fact:number=1
    factorial(){
      let f=1
      for(var i=1; i<=this.n; i++){
        f*=i
      }
      this.fact=f
      this.flag=true
    }
}