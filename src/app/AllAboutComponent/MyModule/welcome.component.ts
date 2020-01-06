import { Component } from '@angular/core';

@Component({
  selector: 'wel-comp',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent{
    message:string='This is a demo for using multiple modules'
}