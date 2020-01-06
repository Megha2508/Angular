import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

//firebase configuration
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './AllAboutComponent/HelloFirst.component';
import { ProductComponent } from './AllAboutComponent/product.component';
import { StudentComponent } from './AllAboutComponent/student.component';
import { WelcomeAppModule } from './AllAboutComponent/MyModule/welcome.module';
import { TheIfComponent } from './TestIF/testngif.component';
import { EmpListComponent } from './TestFor/empList.component';
import { ProdListComponent } from './TestFor/product.component';
import { SwitchComponent } from './TestSwitch/testSwitch.component';
import { TestPipes } from './DemoPipes/testpipe';
import { ExpStrPipe } from './DemoPipes/exp-str.pipe';
import { DiscountPipe } from './DemoPipes/discount.pipe';
import { DemoBindingComponent } from './DataBindingDemos/databinding.component';
import { DemoTwoWayComponent } from './DataBindingDemos/twoway.component';
import { SimpleEventComponent } from './DataBindingDemos/simpleeventdemo.component';
import { PercentagePipe } from './DemoPipes/perc.pipe';
import { Assignment1Component } from './DataBindingDemos/assignment1.component';
import { Assignment2Component } from './DataBindingDemos/assignment2.component';
import { MsgComponent } from './DataBindingDemos/msg.component';
import { DemoChildComponent } from './EventHandlingDemo/demochild.component';
import { DemoParentComponent } from './EventHandlingDemo/demoparent.component';
import { AddChildComponent } from './EventHandlingDemo/addChild.component';
import { AddParentComponent } from './EventHandlingDemo/addParent.component';
import { Assignment3Component } from './EventHandlingDemo/Assignment3.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { AttrComponentComponent } from './attr-component/attr-component.component';
import { ContactComponent } from './DemoForms/contact.component';
import { ValidFormComponent } from './DemoForms/valid-form/valid-form.component';
import { ModelDrivenComponent } from './DemoForms/model-driven/model-driven.component';
import { HomeComponent } from './DemoRouting/home/home.component';
import { PhotosComponent } from './DemoRouting/photos/photos.component';
import { MessageComponent } from './DemoRouting/message/message.component';
import { NotfoundComponent } from './DemoRouting/notfound/notfound.component';
import { routing } from './app.routing';
import { AboutComponent } from './DemoRouting/about/about.component';
import { AboutHomeComponent } from './DemoRouting/about/abouthome.component';
import { AboutItemComponent } from './DemoRouting/about/aboutitem.component';
import { PDetailsComponent } from './AllAboutComponent/PDetails.component';
import { HelloServiceComponent } from './Services/hellotest/hellotest.component';
import { OtherService } from './Services/other.service';
import { MyService } from './Services/my.service';
import { NestedServiceComponent } from './Services/nestedservice.component';
import { HttpDemo } from './httpdemo/httpdemo.component';
import { HttpClientModule } from '@angular/common/http';
import { ODemo1Component } from './ObservableDemo/Demo1.component';
import { ObserverdemoComp } from './ObservableDemo/observerdemo.component';
import { HttpModule } from '@angular/http';
import { PracticeComponent } from './EventHandlingDemo/practice.component';
import { SearchComponent } from './Search/searchItem.component';
import { SearchService } from './Search/search.service';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './employees/shared/employee.service';


@NgModule({
  declarations: [
    AppComponent,HelloComponent,ProductComponent,
    StudentComponent, TheIfComponent, EmpListComponent, 
    ProdListComponent, SwitchComponent, TestPipes, ExpStrPipe,
    DiscountPipe,DemoBindingComponent,DemoTwoWayComponent,
    SimpleEventComponent,PercentagePipe,Assignment1Component,
    Assignment2Component,MsgComponent,DemoChildComponent,
    DemoParentComponent,AddChildComponent,AddParentComponent,
    Assignment3Component,HighlightDirective, AttrComponentComponent, 
    ContactComponent, ValidFormComponent, ModelDrivenComponent, 
    HomeComponent, PhotosComponent, MessageComponent, NotfoundComponent, 
    AboutComponent,AboutHomeComponent,AboutItemComponent, PDetailsComponent, 
    HelloServiceComponent, NestedServiceComponent, HttpDemo, ODemo1Component,
    ObserverdemoComp,PracticeComponent,SearchComponent, 
    EmployeesComponent, EmployeeComponent, EmployeeListComponent
    ],
  imports: [
    BrowserModule,
    WelcomeAppModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [OtherService,MyService,SearchService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }