import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientComponent } from './patient/patient.component';
import {debounceTime,distinctUntilChanged,startWith} from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients:any;
  searchField:FormControl;
  @Output() searchbar=new EventEmitter<string>();
  search$=new Subject<string>();
  
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
  searchResultPatients:any[];
  ngOnInit(): void {
    this.patients=[
      //fill this by recent patients
      {pName:'Random Name_0lonng and olong er name to test',age:42,gender:'Male  ',fathersName:'1_Father also fathers nameis long',pId:'MH_01',disease:'H1_flu'},
      {pName:'Random Name_1',age:43,gender:'Female',fathersName:'2_Father',pId:'MH_02',disease:'H1_flu'},
      {pName:'Random Name_2',age:34,gender:'Male  ',fathersName:'3_Father',pId:'MH_03',disease:'H1_flu'},
      {pName:'Random Name_3',age:98,gender:'Female',fathersName:'4_Father',pId:'MH_04',disease:'H1_flu'},
      {pName:'Random Name_4',age:45,gender:'Male'  ,fathersName:'5_Father',pId:'MH_05',disease:'H1_flu'},
      {pName:'Random Name_5',age:43,gender:'Male'  ,fathersName:'6_Father',pId:'MH_06',disease:'H1_flu'},
      {pName:'Random Name_5',age:13,gender:'Female',fathersName:'7_Father',pId:'MH_07',disease:'H1_flu'},
      {pName:'Random Name_7',age:43,gender:'Male'  ,fathersName:'8_Father',pId:'MH_08',disease:'H1_flu'},
      {pName:'Random Name_9',age:23,gender:'Female',fathersName:'9_Father',pId:'MH_09',disease:'H1_flu'},
      {pName:'Random Name_8',age:53,gender:'Male'  ,fathersName:'10_Father',pId:'MH_10',disease:'H1_flu'}
    ];
    this.searchField=new FormControl;
    this.searchField.valueChanges.pipe(debounceTime(250),distinctUntilChanged(),startWith('')).subscribe(data=>{
      this.searchbar.emit(data);
      if(this.searchById){
        this.searchResultPatients=this.patients.filter(this.patients.pName==data);
      }
      else{
        this.searchResultPatients=this.patients.filter(this.patients.pName==data);
      }
    });
  }

  RowSelected(user:any){
    console.log('selected patient',user)
    let name=user.pName.split(" ");
    this.patient.firstName=name[0];
    this.patient.lastName=name[1];
    this.patient.age=user.age;
    this.patient.gender=user.gender;
    this.patient.patientId=user.pId;
    this.patient.fathersName=user.fathersName;
    this.patient.diseaseTypes=user.disease;
    this.patient.isEditUser=user;

  }
  

}
