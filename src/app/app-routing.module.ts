import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorsComponent } from './admin/doctors/doctors.component';
import { FacilityComponent } from './admin/facility/facility.component';
import { HomeComponent } from './admin/home/home.component';
import { LaboratoryComponent } from './admin/laboratory/laboratory.component';
import { PatientComponent } from './admin/patient/patient.component';
import { ReportComponent } from './admin/report/report.component';
import { StaffComponent } from './admin/staff/staff.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { ContectComponent } from './contect/contect.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'contact', component:ContectComponent},
  {path:'test', component:TestComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'bookappointment',component:BookappointmentComponent},
  { path: 'admin', component: AdminComponent, 
    children: [
      {path: 'home', component: HomeComponent },
      {path: 'patient',component:PatientComponent},
      {path:'facility',component:FacilityComponent},
      {path:'staff',component:StaffComponent},
      {path:'doctors',component:DoctorsComponent},
      {path:'report',component:ReportComponent},
      {path:'laboratory',component:LaboratoryComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
