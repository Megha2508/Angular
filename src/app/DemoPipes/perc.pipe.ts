import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({name:'calPerc'})
export class PercentagePipe implements PipeTransform{
    transform(m1:number,m2:number,m3:number,total:number):number{
        let perc=((m1+m2+m3)/total)*100
        return perc
    }
}