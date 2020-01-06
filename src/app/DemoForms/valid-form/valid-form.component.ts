import { Component } from '@angular/core';

@Component({
  // selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent{
  value:any
  log(contactForm){
    this.value=contactForm
    console.log(contactForm)
  }
}
