import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

// view recent activity and done by whom

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigatePatient(){
    this.router.navigate(['admin/patient']);
  }
  navigateDoctors(){
    this.router.navigate(['admin/doctors']);
  }
  navigateStaff(){
    this.router.navigate(['admin/staff']);
  }
  navigateLaboratory(){
    this.router.navigate(['admin/laboratory']);
  }
  navigateReport(){
    this.router.navigate(['admin/report']);
  }
  navigateFacility(){
    this.router.navigate(['admin/facility']);
  }

}
