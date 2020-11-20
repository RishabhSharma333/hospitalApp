import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  appointmentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gender:new FormControl(''),
    phone:new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    doctorType:new FormControl(''),
    appointmentDate: new FormControl(''),
    slot:new FormControl('Select slot')
  });
  constructor() { }

  ngOnInit(): void {// make sure to load names of doctors before making an appointment
  }

  onSubmitAppointment(){
    console.log(this.appointmentForm);
  }
}
