import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor() { }
  public firstName :string;
  public lastName:string;
  public age:number;
  public gender:String;
  public wardAlloted:string;
  public patientAddress:string;
  public mobileNumber:string;
  public patientId:string;
  public doctorsAlloted:string[];
  public payments:number[];
  public bills:number[];
  public duePayment:number;
  public caseTypes:string[];
  ngOnInit(): void {
  }
  editPatientDetails(){}
  addBill(){}
  makePayment(){}
}
