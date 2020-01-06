import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector:'add-child',
    templateUrl:'addChild.component.html'
})
export class AddChildComponent{
    n1:number
    n2:number
    @Output() add: EventEmitter<number>=new EventEmitter<number>()
    onClick():void{
        this.add.emit(this.n1+this.n2)
    }
}