import { Injectable } from "@angular/core";

@Injectable()
export class OtherService{
    public getMyText(){
        return "Text from other service"
    }
}