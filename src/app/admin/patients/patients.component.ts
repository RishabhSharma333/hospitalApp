import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientComponent } from './patient/patient.component';
 
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients:any;
  searchField:string;
  
  @ViewChild (PatientComponent,{static:false}) patient:PatientComponent;
  constructor() { }
  searchById:boolean=false;
  searchByName:boolean=true;
  searchBy(id:number){
    if(id==1){
      this.searchById=false;
      this.searchByName=true;
    }
    else if(id==2){
      this.searchById=true;
      this.searchByName=false;
    }
  }
  ngOnInit(): void {
    this.patients=[
      //fill this by recent patients
      {name:'Random Name_0lonng and olong er name to test',age:42,gender:'Male  ',fathersName:'1_Father also fathers nameis long',id:'MH_01',disease:'H1_flu'},
      {name:'Random Name_1',age:43,gender:'Female',fathersName:'2_Father',id:'MH_02',disease:'H1_flu'},
      {name:'Random Name_2',age:34,gender:'Male  ',fathersName:'3_Father',id:'MH_03',disease:'H1_flu'},
      {name:'Random Name_3',age:98,gender:'Female',fathersName:'4_Father',id:'MH_04',disease:'H1_flu'},
      {name:'Random Name_4',age:45,gender:'Male'  ,fathersName:'5_Father',id:'MH_05',disease:'H1_flu'},
      {name:'Random Name_5',age:43,gender:'Male'  ,fathersName:'6_Father',id:'MH_06',disease:'H1_flu'},
      {name:'Random Name_5',age:13,gender:'Female',fathersName:'7_Father',id:'MH_07',disease:'H1_flu'},
      {name:'Random Name_7',age:43,gender:'Male'  ,fathersName:'8_Father',id:'MH_08',disease:'H1_flu'},
      {name:'Random Name_9',age:23,gender:'Female',fathersName:'9_Father',id:'MH_09',disease:'H1_flu'},
      {name:'Random Name_8',age:53,gender:'Male'  ,fathersName:'10_Father',id:'MH_10',disease:'H1_flu'}
    ];
  }

  RowSelected(user:any){
    console.log('selected patient',user)
    let name=user.name.split(" ");
    this.patient.firstName=name[0];
    this.patient.lastName=name[1];
    this.patient.age=user.age;
    this.patient.gender=user.gender;
    this.patient.patientId=user.id;
    this.patient.fathersName=user.fathersName;
    this.patient.diseaseTypes=user.disease;
    this.patient.isEditUser=user;

  }
  

}
