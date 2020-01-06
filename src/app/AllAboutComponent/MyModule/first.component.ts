import { Component } from '@angular/core';


@Component({
  selector: 'first-comp',
  template: `<div><h3>{{title}}</h3></div>`,
  styles: [`h3{
    width: 500px;
    color: black;
    border: 2px solid burlywood;
    padding: 3px;
    font-size: 100%;
  }`]
})
export class FirstComponent{
    title=`First component of customized module`
}