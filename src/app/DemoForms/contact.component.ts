import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  msg:string=""

  ngOnInit() {
  }

  value:any
  contact:Contact={
    firstname:"Meghna",
    lastname:"Jain",
    city:"Pune",
    street:"Shivajinagar",
    pincode:411001
  };

  logForm(fvalue:any){
    this.msg="Submitted"
    this.value=fvalue;
    console.log(fvalue)
  }
}
