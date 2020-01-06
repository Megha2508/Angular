import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './testngif.component.html',
  styleUrls: ['./testngif.component.css']
})
export class TheIfComponent {
  title = 'Welcome';
  status: boolean = true;
}