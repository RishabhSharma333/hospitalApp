import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookappointmentComponent } from 'src/app/bookappointment/bookappointment.component';

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
  public isEditUser:any;
  @ViewChild(BookappointmentComponent ,{static:false}) bookAppointment: BookappointmentComponent;
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
  toggleModal() {

    this.isModalActive = !this.isModalActive;
    this.bookAppointment.isEdit=true;
    this.prePopulateData();
  }
  savePatientDetails(){

    this.toggleModal();
  }
  onSubmitEditPatient(){}
  addBill(){}
  makePayment(){}
  prePopulateData(){
    if(this.isEditUser!=undefined&&this.isEditUser!=null){
      var name:string[]=this.isEditUser.pName.split(" ");

    this.bookAppointment.appointmentForm.get('firstName').setValue(name[0]);
    this.bookAppointment.appointmentForm.get('lastName').setValue(name[1]);
    this.bookAppointment.appointmentForm.get('age').setValue(this.isEditUser.age);
    this.bookAppointment.appointmentForm.get('gender').setValue(this.isEditUser.gender);
    
    // var address :string[]=this.isEditUser.patientAdress.split(" ");
    // this.bookAppointment.appointmentForm.get('flatNo').setValue(address[0]);
    // this.bookAppointment.appointmentForm.get('area').setValue(address[1]);
    // this.bookAppointment.appointmentForm.get('city').setValue(address[2]);
    // this.bookAppointment.appointmentForm.get('landmark').setValue(address[3]);
    }
    else {
      console.log('selected user is empty');
    }
  }
}
