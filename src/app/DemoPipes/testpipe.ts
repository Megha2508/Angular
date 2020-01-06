import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './testpipes.component.html'
})
export class TestPipes {
    title='Pipe Demo';
    xyz:string='Seed infotech';
    jd=new Date(2002,3,15);
    a:number=0.259;
    b:number=12.3495;
    num1:number=2.5;
    num2:number=0.5;
    course:any={code:101, name:'Professional Azure',fees:24000,
    technology:'Cloud'};
    bookObj=new book("ABC",1234);
}
export class book{
    bkname:string;
    price:number;
    constructor(public bkName:string,public Price:number){
        this.bkname=bkName;
        this.price=Price;
    }
}