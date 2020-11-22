import { Component, OnInit } from '@angular/core';
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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  showMedicines(){
    this.router.navigate(['/stock']);
  }
}
