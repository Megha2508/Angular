import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({name:'calDisc'})
export class DiscountPipe implements PipeTransform{
    transform(value:number,disc:number):number{
        let discount=value-((value*disc)/100)
        return discount;
    }
}