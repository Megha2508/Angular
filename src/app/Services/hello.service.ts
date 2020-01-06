import { Injectable } from "@angular/core";

@Injectable()
export class HelloService{
    public sayHello(){
        return "Welcome to the world of angular services.!!"
    }
    Courses=["Angular","Aws","Azure PaaS","Azure IaaS","Data Analytics","Machine Learning"]
    getCourses(){
        return this.Courses
    }
}