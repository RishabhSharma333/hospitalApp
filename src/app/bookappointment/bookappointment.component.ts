import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {
  public isEdit:boolean=false;

  appointmentForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]*")]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[A-Za-z]*")]),
    gender:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(3),Validators.pattern("[0-9]*")]),
    mobileNumber:new FormControl('',[Validators.required,Validators.pattern("[6789][0-9]{9}")]),

    address: new FormGroup({
      flatNo: new FormControl('',Validators.required),
      area: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z]*")]),
      city: new FormControl('',[Validators.required,Validators.pattern("[A-Za-z]*")]),
      landmark: new FormControl('')
    }),
    visitReason:new FormControl('',Validators.required),
    doctorType:new FormControl(''),
    slot:new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {// make sure to load names of doctors and their slots before making an appointment
  }
  get firstName(){
    return this.appointmentForm.get('firstName');
  }
  get lastName(){
    return this.appointmentForm.get('lastName');
  }
  get age(){
    return this.appointmentForm.get('age');
  }
  get mobileNumber(){
    return this.appointmentForm.get('mobileNumber');
  }
  get flatNo(){
    return this.appointmentForm.get('address.flatNo');
  }
  get area(){
    return this.appointmentForm.get('address.area');

  }
  get city(){
    return this.appointmentForm.get('address.city');
  }
  get landmark(){
    return this.appointmentForm.get('address.landmark');
  }
  get doctorType(){
    return this.appointmentForm.get('doctorType');
  }
  get slot(){
    return this.appointmentForm.get('slot');
  }
  get visitReason(){
    return this.appointmentForm.get('visitReason');
  }
  onSubmitAppointment(){
    console.log(this.appointmentForm);
  }
}
