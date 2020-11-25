import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorComponent } from './doctor/doctor.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  @ViewChild(DoctorComponent ,{static:true}) doctor:DoctorComponent;
  public doctors:any;
  constructor() { }

  ngOnInit(): void {
    this.doctors=[
      {'dName':'Doctor Name_2','gender':'Male','dId':'MH_22','Qualification':'H1_flu','mobileNumber':'999123999'},
      {'dName':'Doctor Name_0','gender':'Male','dId':'MH_33','Qualification':'H1_flu','mobileNumber':'999923999'},
      {'dName':'Doctor Name_3','gender':'female','dId':'MH_44','Qualification':'mbbs','mobileNumber':'999999999'},
      {'dName':'Doctor Name_4','gender':'Male','dId':'MH_55','Qualification':'H1_flu','mobileNumber':'994599999'},
      {'dName':'Doctor Name_1','gender':'female','dId':'MH_11','Qualification':'mbbs','mobileNumber':'999999999'},
      {'dName':'Doctor Name_5','gender':'Male','dId':'MH_66','Qualification':'H1_flu','mobileNumber':'999999999'},
      {'dName':'Doctor Name_5','gender':'female','dId':'MH_77','Qualification':'dentist','mobileNumber':'932549999'},
      {'dName':'Doctor Name_7','gender':'Male','dId':'MH_88','Qualification':'H1_flu','mobileNumber':'999999999'},
      {'dName':'Doctor Name_9','gender':'female','dId':'MH_99','Qualification':'H1_flu','mobileNumber':'9912359999'},
      {'dName':'Doctor Name_8','gender':'Male','dId':'MH_103','Qualification':'H1_flu','mobileNumber':'9992219999'}
    ];
    
  }
  doctorSelected(user:any){
    console.log('selected ',user);
    let name=user.dName.split(" ");
    this.doctor.firstName=name[0];
    this.doctor.lastName=name[1];
    this.doctor.doctorId=user.dId;
    this.doctor.gender=user.gender;
    this.doctor.qualification=user.Qualification;
    this.doctor.mobileNumber=user.mobileNumber;
  }
}
