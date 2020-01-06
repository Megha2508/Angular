import { Component } from '@angular/core';
import { Http } from "@angular/http";

import { map } from 'rxjs/operators/map';
import { Observable } from "rxjs";

@Component({
    selector:'observable-1',
    template:`<h3>JSON data on console</h3>`
})
export class ODemo1Component{
    constructor(private http: Http){ }
    ngOnInit(){
        this.http.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(map(this.extractData))
        .subscribe(this.handleData,this.handleError,this.handleComplete)
    }
    extractData(response){
        console.log('Raw response: ',response)
        console.log('Formatted response: ',response.json())
        const body=response.json()
        return body || { }
    }
    handleData(data){
        console.log('Here are the usable data',data)
    }
    handleComplete() {
        console.log('Complete');
      }
    
      handleError(error) {
        console.log('error:', error)
        return Observable.throw(error);
      }
}