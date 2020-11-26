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
  searchBed:string;
  searchWard:string;
  wards:any[]=[
    {name:'ward onee',noOfBeds:6,occupiedBeds:3},
    {name:'ward rwoe',noOfBeds:7,occupiedBeds:3},
    {name:'ward thee',noOfBeds:8,occupiedBeds:8},
    {name:'ward four',noOfBeds:1,occupiedBeds:1},
    {name:'ward five',noOfBeds:5,occupiedBeds:3},
  ];
  beds:any[]=[
    {id:'1234',occupied:'patient one ',ward:'ward onee'},
    {id:'234',occupied:'patient one ',ward:'ward rwoe'},
    {id:'124',occupied:'',ward:'ward four'},
    {id:'2534',occupied:'patient one wot',ward:'ward onee'},
    {id:'44',occupied:'patient e wot',ward:'ward onee'},
    {id:'23',occupied:'',ward:'ward five'},
    {id:'2434',occupied:'patiee wot',ward:'ward onee'},
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
