import { Component } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'hello-service',
  templateUrl: './hellotest.component.html',
  providers: [HelloService]
})
export class HelloServiceComponent {

  msg:string=""
  courselist:string[]
  flag:boolean=false

  constructor(private helloservice: HelloService) { }

  public display(){
    this.msg=this.helloservice.sayHello()
  }
  public listCourses(){
    this.flag=true
    this.courselist=this.helloservice.getCourses()
  }

}
