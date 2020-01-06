import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-component',
  templateUrl: './attr-component.component.html',
  styleUrls: ['./attr-component.component.css']
})
export class AttrComponentComponent {

  svar:string="Style using ngStyle"
  color:string
  size:number
  displayText:string
  visible:boolean


  ngOnInit() {
    this.color='pink'
    this.size=23;
    this.displayText='show-text'
    this.visible=true
  }

}
