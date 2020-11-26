import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  constructor() { }
  editDoctorForm:NgForm;
  public firstName :string;
  public lastName:string;
  public gender:String;
  public mobileNumber:string;
  public doctorId:string;
  public qualification:string;
  onEditDoctorForm(editDoctorForm:NgForm){
    this.firstName=editDoctorForm.value('doctorsFirstName');
    this.lastName=editDoctorForm.value('doctorsLastName');
    this.gender=editDoctorForm.value('doctorsGender');
    this.mobileNumber=editDoctorForm.value('doctorsMobileNumber');
    this.doctorId=editDoctorForm.value('doctorId');
    this.qualification=editDoctorForm.value('doctorsQualification');
  }
  isModalActive: boolean = false;

  ngOnInit(): void {
  }
  toggleModal(){
    this.isModalActive=!this.isModalActive;
  }
  
  prePopulateDataDoctor(editDoctorForm){
    editDoctorForm.value.get('doctorsLastName').setValue(this.lastName);
    editDoctorForm.value.get('doctorsMobileNumber').setValue(this.mobileNumber);
    editDoctorForm.value.get('doctorsQender').setValue(this.gender);
    editDoctorForm.value.get('doctorsFirstName').setValue(this.firstName);
    editDoctorForm.value.get('doctorsqualification').setValue(this.qualification);
    editDoctorForm.value.get('doctorId').setValue(this.doctorId);
  }
}
