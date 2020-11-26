import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor() { }
  searchStock:string;
  searchMedicine:boolean;
  searchOtherStock:boolean;
  medicines:any[]=[
    {name:'medicine 1',numberLeft:45},
    {name:'othicine 2',numberLeft:5},
    {name:'onee 3',numberLeft:35},
    {name:'ind 4',numberLeft:15},
    {name:'medicine 5',numberLeft:6},
    {name:'ryicine 7',numberLeft:17},
    {name:'perine 6',numberLeft:12}
  ];
  otherStocks:any[]=[
    {name:'gloves',numberLeft:34},
    {name:'diosal',numberLeft:45},
    {name:'sposal',numberLeft:45},
    {name:'dispo',numberLeft:23},
    {name:'diosal',numberLeft:345},

  ];

  ngOnInit(): void {
    this.searchMedicine=true;
    this.searchOtherStock=false;
  }
  searchBy(num:number){
    if(num==1){
      this.searchMedicine=true;
      this.searchOtherStock=false;
    }
    else {
      this.searchOtherStock=true;
      this.searchMedicine=false;
    }
  }
}
