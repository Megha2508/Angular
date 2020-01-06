import { ElementRef, Directive } from "@angular/core";

@Directive({selector:'[myHighlight]'})
export class HighlightDirective{
    constructor(ele: ElementRef){
        ele.nativeElement.style.backgroundColor = 'yellow';
    }
}