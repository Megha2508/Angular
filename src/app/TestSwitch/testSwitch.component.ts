import { Component } from '@angular/core';

@Component({
  selector: 'switch-comp',
  templateUrl: './testSwitch.component.html',
  styleUrls:['./testSwitch.component.css']
})
export class SwitchComponent {
  people:any[];
  constructor(){
    this.people=[
      {
        code: 101,
        name:'Megha',
        gender:'female',
        AnSal:55000,
        DOB:'26/6/1998',
        country:'India'
      },
      {
        code: 102,
        name:'Adam',
        gender:'male',
        AnSal:45000,
        DOB:'17/5/1992',
        country:'Czech Republic'
      },
      {
        code: 103,
        name:'Angela',
        gender:'female',
        AnSal:35000,
        DOB:'04/7/1994',
        country:'Italy'
      },
      {
        code: 104,
        name:'Enrique',
        gender:'male',
        AnSal:25000,
        DOB:'2/8/1998',
        country:'Spain'
      },
      {
        code: 105,
        name:'Nikita',
        gender:'male',
        AnSal:15000,
        DOB:'18/11/1995',
        country:'Russia'
      }
    ];
  }
}