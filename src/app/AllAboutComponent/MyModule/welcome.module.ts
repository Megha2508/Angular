import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { WelcomeComponent } from './welcome.component';
import { FirstComponent } from './first.component';

@NgModule({
  declarations: [WelcomeComponent,FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[
      WelcomeComponent,FirstComponent
  ],
  providers: [],
  bootstrap: []
})
export class WelcomeAppModule { }