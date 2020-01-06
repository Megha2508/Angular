import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({name:'expStr'})
export class ExpStrPipe implements PipeTransform{
    transform(value:number,exponent:string):number{
        let exp=parseFloat(exponent);
        return Math.pow(value, isNaN(exp)?1:exp);
    }
}