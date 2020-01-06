import { Component } from '@angular/core';
import { student } from './student';


@Component({
  selector: 'stud-comp',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{
    title:string="This is student component"
    obj:student=null;
    obj1:student=null;
    constructor()
    {
      this.obj=new student(1,'Megha',87,68,74)
      this.obj1=new student(2,'Harsh',92,88,85)
    }
}
