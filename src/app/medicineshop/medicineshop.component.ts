import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicineshop',
  templateUrl: './medicineshop.component.html',
  styleUrls: ['./medicineshop.component.css']
})
export class MedicineshopComponent implements OnInit {

  constructor() { }
  searchMedicine:string;
  medicines:any[]=[
    {name:'medi 2',id:'3',pricePerPiece:3,stockLeft:5},
    {name:'var 2',id:'213',pricePerPiece:3,stockLeft:76},
    {name:'cha 2',id:'235',pricePerPiece:16,stockLeft:52},
    {name:'cure 2',id:'24',pricePerPiece:2,stockLeft:5},
    {name:'cine 2',id:'45',pricePerPiece:5,stockLeft:56},
    {name:'anna 2',id:'73',pricePerPiece:7,stockLeft:50},
    {name:'jone 2',id:'99',pricePerPiece:11,stockLeft:45},
    {name:'elec 2',id:'93',pricePerPiece:37,stockLeft:51},
  ];
  ngOnInit(): void {
  }

}
