import { Component } from '@angular/core';

@Component({
  selector: 'list-prod',
  templateUrl: './product.component.html'
})
export class ProdListComponent {
    products: any[];
    constructor(){
        this.products=[
            {
                pid:101, pname:'AC', price:45000,
                quantity:5, disc:20
            },
            {
                pid:102, pname:'Washing Machine', price:55000,
                quantity:3, disc:10
            },
            {
                pid:103, pname:'Cooler', price:15000,
                quantity:7, disc:0
            },
            {
                pid:104, pname:'Dish Washer', price:25000,
                quantity:2, disc:15
            }
        ];
    }
}