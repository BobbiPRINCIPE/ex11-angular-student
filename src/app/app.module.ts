import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NOTE ilker added for 2 way data binding between template and component
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'; // NOTE ilker added to use routes

import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDataService } from './services/student-data.service';
import { AboutComponent } from './components/about/about.component';

// NOTE ilker added below route definitions
const appRoutes:Routes = [
  {path:'', component: StudentComponent}, // NOTE ilker, the root route is StudentComponent
  {path:'about', component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent, // NOTE ilker added to use StudentComponent
    AboutComponent    // NOTE ilker added to use AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // NOTE ilker added for 2 way data binding between template and component
    HttpModule,  // NOTE ilker added for StudentDataService to make REST call
    RouterModule.forRoot(appRoutes) // NOTE ilker to use and configure routes 
  ],
  providers: [StudentDataService],  // NOTE ilker added StudentDataService after creating the service via CLI
  bootstrap: [AppComponent]
})
export class AppModule { }
