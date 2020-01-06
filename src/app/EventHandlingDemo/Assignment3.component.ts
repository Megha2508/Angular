import { Component } from '@angular/core';

@Component({
  selector: 'Assignment3',
  templateUrl: './Assignment3.component.html'
})
export class Assignment3Component {
  flag:Boolean
  new={
    id:0,
    name:" ",
    price:0,
    discount:0 
  }
  product=[{
    id:100,
    name:"Television",
    price:45000,
    discount:10
  }]
  
  constructor(){ }
  Edit(id:number){
    this.flag=true
    for(var i=0;i<this.product.length;i++){
      if(this.product[i].id==id){
        this.new=this.product[i];
        break;
      }
    }
  }
  Done(id:number){
    this.flag=false
    for(var i=0;i<this.product.length;i++){
      if(this.product[i].id==id){
        this.product[i]=this.new;
      }
      if(this.product[i].id==id){
        
      }
    }
    this.new={
      id:0,
      name:" ",
      price:0,
      discount:0
    }
  }
  Delete(id:number){
    for(var i=0;i<this.product.length;i++){
      if(this.product[i].id==id){
        this.product.splice(i)
        break;
      }
    }
  }
  Add(){
    this.product.push(this.new)
    this.new={
      id:0,
      name:" ",
      price:0,
      discount:0
    }
  }
}