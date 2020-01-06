import { RouterModule } from '@angular/router'

import { HomeComponent } from "./DemoRouting/home/home.component";
import { MessageComponent } from './DemoRouting/message/message.component';
import { PhotosComponent } from './DemoRouting/photos/photos.component';
import { NotfoundComponent } from './DemoRouting/notfound/notfound.component';
import { ValidFormComponent } from './DemoForms/valid-form/valid-form.component';
import { AboutComponent } from './DemoRouting/about/about.component';
import { AboutHomeComponent } from './DemoRouting/about/abouthome.component';
import { AboutItemComponent } from './DemoRouting/about/aboutitem.component';
import { PDetailsComponent } from './AllAboutComponent/PDetails.component';
import { Assignment3Component } from './EventHandlingDemo/Assignment3.component';

export const routing=RouterModule.forRoot([
    {path:'',component:HomeComponent},
    {
        path:'about', component:AboutComponent,
        children:[
            {path:'',component:AboutHomeComponent},
            {path:'item/:id',component:AboutItemComponent}
        ]
    },
    {
        path:'product',component:Assignment3Component,
        children:[
            {path:'details/:id',component:PDetailsComponent}
        ]
    
    },
    {path:'messages',component:MessageComponent},
    {path:'photos',component:PhotosComponent},
    {path:'form',component:ValidFormComponent},
    {path:'**',component:NotfoundComponent}
])