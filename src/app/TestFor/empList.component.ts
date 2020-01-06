import { Component } from '@angular/core';

@Component({
  selector: 'list-emp',
  templateUrl: './empList.component.html',
  styles: [`.test{
      color: blue;
  }
  .default{
      color: violet;
  }
  `]
})
export class EmpListComponent {
    employees: any[];
    constructor(){
        this.employees=[
            {
                eid:101, name:'Megha', gender:'female',
                sal:5500, DOB:'26/06/1998',fulltime:true
            },
            {
                eid:102, name:'Tanushree', gender:'female',
                sal:4500, DOB:'11/11/1998',fulltime:false
            },
            {
                eid:103, name:'Arpita', gender:'female',
                sal:3500, DOB:'20/05/1998',fulltime:true
            },
            {
                eid:104, name:'Kritika', gender:'female',
                sal:2500, DOB:'01/05/1998',fulltime:false
            }
        ];
    }
}