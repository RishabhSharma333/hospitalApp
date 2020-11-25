import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor() { }
  public firstName :string;
  public lastName:string;
  public gender:String;
  public mobileNumber:string;
  public doctorId:string;
  public qualification:string;

  
  isModalActive: boolean = false;

  ngOnInit(): void {
  }
  toggleModal(){
    this.isModalActive=!this.isModalActive;
  }
  saveDoctorsDetails(){
    
    this.toggleModal();
  }
}
