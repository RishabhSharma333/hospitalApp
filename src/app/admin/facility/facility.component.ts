import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  //medicines stock
  //bed
  //icu
  //ward
  //
  searchBedField:FormControl;
  searchWardField:FormControl;
  wards:any[]=[
    {wardName:'ward onee',noOfBeds:6,occupiedBeds:3},
    {wardName:'ward rwoe',noOfBeds:7,occupiedBeds:3},
    {wardName:'ward thee',noOfBeds:8,occupiedBeds:8},
    {wardName:'ward four',noOfBeds:1,occupiedBeds:1},
    {wardName:'ward five',noOfBeds:5,occupiedBeds:3},
  ];
  beds:any[]=[
    {bedId:'1234',occupied:'patient one ',ward:'ward onee'},
    {bedId:'234',occupied:'patient one ',ward:'ward rwoe'},
    {bedId:'124',occupied:'',ward:'ward four'},
    {bedId:'2534',occupied:'patient one wot',ward:'ward onee'},
    {bedId:'44',occupied:'patient e wot',ward:'ward onee'},
    {bedId:'23',occupied:'',ward:'ward five'},
    {bedId:'2434',occupied:'patiee wot',ward:'ward onee'},
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.searchBedField=new FormControl();
    this.searchWardField=new FormControl();
  }
}
