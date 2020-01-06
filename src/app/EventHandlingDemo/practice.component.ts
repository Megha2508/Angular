import {Component } from '@angular/core';    
    
export class MyItems {    
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}    
    
@Component({    
  selector: 'practice',    
  templateUrl: './practice.component.html'
})    
export class PracticeComponent  {    
    
  // Used To Specify Title using Interpolation    
  title = 'Working With Array In Angular';    
    
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
  // Provide some values to the array    
  constructor()    
  {    
    // this.myItems.push(    
    //   new MyItems("First Value"),    
    //   new MyItems("Second Value"),    
    //   new MyItems("Third Value"),    
    //   new MyItems("Forth Value"),    
    //   new MyItems("Fifth Value")    
    // );    
  }
  
// To add new item in array    
AddItem() {    
    this.myItems.push(this.newItem);    
    this.newItem = {};    
  } 

// When user selects edit option  
EditItem(i) {  
    this.newItem.Value = this.myItems[i].Value;  
    this.updatedItem = i;  
    this.IsForUpdate = true;  
  }  

// When user clicks on update button to submit updated value  
UpdateItem() {  
let data = this.updatedItem;  
for (let i = 0; i < this.myItems.length; i++) {  
    if (i == data) {  
    this.myItems[i].Value = this.newItem.Value;  
    }  
}
console.log(this.myItems)
this.IsForUpdate = false;  
this.newItem = {};  
}
}  