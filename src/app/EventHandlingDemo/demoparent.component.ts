import { Component } from "@angular/core";

@Component({
    selector: 'parent-comp',
    templateUrl: './demoparent.component.html'
})
export class DemoParentComponent{
    msg:string=""
    onNotify(message:string):void{
        this.msg+='I am actually'+message
    }
}