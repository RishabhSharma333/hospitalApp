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
      {}
    ]
    {}
  }

}
