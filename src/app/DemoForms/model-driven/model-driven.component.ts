import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styles: [`
  input.ng-invalid{border-left:5px color:red;}
  input.ng-valid{border-left:5px color:green;}
  `]
})
export class ModelDrivenComponent {
  value:any

  contactForm= new FormGroup({
    firstname: new FormControl('',Validators.compose([Validators.required,
    Validators.minLength(4), Validators.maxLength(8)])),
    lastname: new FormControl('',Validators.compose([Validators.required,
    Validators.minLength(4)])),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(''),
      pincode: new FormControl('',Validators.pattern('^[0-9]{6}$'))
    })
  })
  onSubmit(fvalue){
    this.value=this.contactForm.value
    console.log(this.contactForm.value)
  }

}
