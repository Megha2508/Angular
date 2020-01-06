import { Component } from '@angular/core';

@Component({
  selector: 'prop-comp',
  templateUrl: './databinding.component.html'
})
export class DemoBindingComponent {
    flag=true;
    website={
        name: 'Technologies',
        logo: 'favicon.ico',
        url: 'www.technologies.com',
        description: 'Description of site here'
    }
}