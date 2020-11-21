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
    this.router.navigate(['../patient']);
  }
  navigateDoctors(){
    this.router.navigate(['../doctors']);
  }
  navigateStaff(){
    this.router.navigate(['../staff']);
  }
  navigateLaboratory(){
    this.router.navigate(['../laboratory']);
  }
  navigateReport(){
    this.router.navigate(['../report']);
  }
  navigateFacility(){
    this.router.navigate(['../facility']);
  }

}
