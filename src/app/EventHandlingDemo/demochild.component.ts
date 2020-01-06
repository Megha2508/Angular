import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'demo-child',
    templateUrl: './demochild.component.html'
})
export class DemoChildComponent{
    @Output() notify: EventEmitter<string>=new EventEmitter<string>()
    onClick():void{
        this.notify.emit(' fired from child comp')
    }
}