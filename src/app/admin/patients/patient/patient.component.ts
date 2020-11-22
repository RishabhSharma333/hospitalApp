import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  public diseaseTypes:string[];
  // editPatientForm = new FormGroup({
  //   firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]*")]),
  //   lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]*")]),
  //   gender:new FormControl('',[Validators.required]),
  //   age:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(3),Validators.pattern("[0-9]*")]),
  //   mobileNumber:new FormControl('',[Validators.required,Validators.pattern("[6789][0-9]{9}")]),

  //   address: new FormGroup({
  //     flatNo: new FormControl('',Validators.required),
  //     area: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z]*")]),
  //     city: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z]*")]),
  //     landmark: new FormControl('')
  //   })
    
  // });
  ngOnInit(): void {
  }
  isModalActive: boolean = false;
  isBillModalActive:boolean=false;

  toggleBillModal() {
    this.isBillModalActive = !this.isBillModalActive;
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  savePatientDetails(){
    this.toggleModal();
  }
  onSubmitEditPatient(){}
  addBill(){}
  makePayment(){}
}
