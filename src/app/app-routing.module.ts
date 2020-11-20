import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ContectComponent } from './contect/contect.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'contact', component:ContectComponent},
  {path:'test', component:TestComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'bookappointment',component:BookappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
