import { Injectable } from "@angular/core";
import { OtherService } from "./other.service";

@Injectable()
export class MyService{
    constructor(private otherService:OtherService){}
    public getTextFromOtherService(){
        return "Service called from Myservice- "+this.otherService.getMyText()
    }
}