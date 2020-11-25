import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientComponent } from './patient/patient.component';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients:any;
  @ViewChild (PatientComponent,{static:false}) patient:PatientComponent;
  constructor() { }

  ngOnInit(): void {
    this.patients=[
      {'pName':'Random Name','age':42,'gender':'Male','pId':'MH_01','disease':'H1_flu'},
      {'pName':'Random Name_1','age':43,'gender':'Female','pId':'MH_02','disease':'H1_flu'},
      {'pName':'Random Name_2','age':34,'gender':'Male','pId':'MH_03','disease':'H1_flu'},
      {'pName':'Random Name_3','age':98,'gender':'Female','pId':'MH_04','disease':'H1_flu'},
      {'pName':'Random Name_4','age':45,'gender':'Male','pId':'MH_05','disease':'H1_flu'},
      {'pName':'Random Name_5','age':43,'gender':'Male','pId':'MH_06','disease':'H1_flu'},
      {'pName':'Random Name_5','age':13,'gender':'Female','pId':'MH_07','disease':'H1_flu'},
      {'pName':'Random Name_7','age':43,'gender':'Male','pId':'MH_08','disease':'H1_flu'},
      {'pName':'Random Name_9','age':23,'gender':'Female','pId':'MH_09','disease':'H1_flu'},
      {'pName':'Random Name_8','age':53,'gender':'Male','pId':'MH_10','disease':'H1_flu'}
    ];
  }

  RowSelected(user:any){
    console.log('selected patient',user);
    let name=user.pName.split(" ");
    this.patient.firstName=name[0];
    this.patient.lastName=name[1];
    this.patient.age=user.age;
    this.patient.gender=user.gender;
    this.patient.patientId=user.pId;
    this.patient.diseaseTypes=user.disease;
    this.patient.isEditUser=user;

  }

}
