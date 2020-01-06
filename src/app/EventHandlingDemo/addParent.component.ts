import { Component } from "@angular/core";

@Component({
    selector:'add-parent',
    templateUrl:'addParent.component.html'
})
export class AddParentComponent{
    msg:string=""
    onNotify(message:string):void{
        this.msg=message
    }
}