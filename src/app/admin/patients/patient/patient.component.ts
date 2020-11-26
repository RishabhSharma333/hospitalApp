import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  public gender:string;
  public fathersName:string;
  public mothersName:string;
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
  ngOnInit(): void {
  }
  isModalActive: boolean = false;  
  detailsTab:boolean=true;
  docTab: boolean=false;
  paymentTab: boolean=false;
  billTab: boolean =false;
  addPaymentTab:boolean=false;
  addBillTab:boolean =false;
  toggleModal() {

    this.isModalActive = !this.isModalActive;
    this.bookAppointment.isEdit=true;
    this.prePopulateData();
  }


  showContent(val){
    console.log('showContent');
    if(val==0){
      console.log('val',val);
      this.detailsTab=true;
      this.docTab=false;
      this.billTab=false;
      this.paymentTab=false;
      this.addBillTab=false;
      this.addPaymentTab=false;
    }
    if(val==1){
      console.log('val',val);
      this.detailsTab=false;
      this.docTab=true;
      this.billTab=false;
      this.paymentTab=false;
      this.addBillTab=false;
      this.addPaymentTab=false;
    }
    else if(val==2){
      console.log('val',val);
      this.detailsTab=false;
      this.docTab=false;
      this.billTab=false;
      this.paymentTab=false;
      this.addBillTab=true;
      this.addPaymentTab=false;
    }
    else if(val==3){
      console.log('val',val);
      this.docTab=false;
      this.detailsTab=false;
      this.billTab=false;
      this.paymentTab=false;
      this.addBillTab=false;
      this.addPaymentTab=true;
    }
    else if(val==4){
      console.log('val',val);
      this.docTab=false;
      this.detailsTab=false;
      this.billTab=true;
      this.paymentTab=false;
      this.addBillTab=false;
      this.addPaymentTab=false;
    }
    else if(val==5){
      console.log('val',val);
      this.docTab=false;
      this.detailsTab=false;
      this.billTab=false;
      this.paymentTab=true;
      this.addBillTab=false;
      this.addPaymentTab=false;
    }
  }
  
  savePatientDetails(){

    this.toggleModal();
  }
  clearBillForm(){}
  onSubmitBillForm(billForm:NgForm){
    console.log(billForm);
  }
  onSubmitPaymentForm(paymentForm:NgForm){
    console.log(paymentForm);
  }
  onSubmitEditPatient(){}
  addBill(){}
  makePayment(){}
  viewPaymentHistory(){}
  viewBillHistory(){}
  prePopulateData(){
    if(this.isEditUser!=undefined&&this.isEditUser!=null){
      var name:string[]=this.isEditUser.pName.split(" ");

    this.bookAppointment.appointmentForm.get('firstName').setValue(name[0]);
    this.bookAppointment.appointmentForm.get('lastName').setValue(name[1]);
    this.bookAppointment.appointmentForm.get('age').setValue(this.isEditUser.age);
    this.bookAppointment.appointmentForm.get('gender').setValue(this.isEditUser.gender);
    this.bookAppointment.appointmentForm.get('fathersName').setValue(this.isEditUser.fathersName);
    this.bookAppointment.appointmentForm.get('mothersName').setValue(this.isEditUser.mothersName);

    
    
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
