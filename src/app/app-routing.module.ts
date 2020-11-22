import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DoctorsComponent } from './admin/doctors/doctors.component';
import { FacilityComponent } from './admin/facility/facility.component';
import { StockComponent } from './admin/facility/stock/stock.component';
import { LaboratoryComponent } from './admin/laboratory/laboratory.component';
import { PatientsComponent } from './admin/patients/patients.component';
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
      {path: 'patients',component:PatientsComponent},
      {path:'facility',component:FacilityComponent},
      {path:'staff',component:StaffComponent},
      {path:'doctors',component:DoctorsComponent},
      {path:'report',component:ReportComponent},
      {path:'laboratory',component:LaboratoryComponent},
      {path:'',redirectTo:'patients',pathMatch:'full'}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
