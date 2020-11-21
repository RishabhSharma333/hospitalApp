import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ContectComponent } from './contect/contect.component';
import { TestComponent } from './test/test.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FrontstaffComponent } from './frontstaff/frontstaff.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { PatientComponent } from './admin/patient/patient.component';
import { DoctorsComponent } from './admin/doctors/doctors.component';
import { FacilityComponent } from './admin/facility/facility.component';
import { StaffComponent } from './admin/staff/staff.component';
import { HomeComponent } from './admin/home/home.component';
import { ReportComponent } from './admin/report/report.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { LaboratoryComponent } from './admin/laboratory/laboratory.component';
import { StockComponent } from './admin/facility/stock/stock.component';
import { PatientsComponent } from './admin/patients/patients.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ContectComponent,
    TestComponent,
    HomepageComponent,
    BookappointmentComponent,
    AdminComponent,
    FrontstaffComponent,
    ReceptionistComponent,
    PatientComponent,
    DoctorsComponent,
    FacilityComponent,
    StaffComponent,
    HomeComponent,
    ReportComponent,
    PharmacistComponent,
    LaboratoryComponent,
    StockComponent,
    PatientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
