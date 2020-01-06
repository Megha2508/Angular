import { Component } from '@angular/core';

@Component({
  selector: 'eventdemo-app',
  templateUrl: './simpleeventdemo.component.html'
})
export class SimpleEventComponent {
    message='';
    onClickMe(){
        this.message="You pressed meee!!!";
    }
}