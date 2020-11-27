import { Component, OnInit, ViewChild } from '@angular/core';
import { ReceiptComponent } from './receipt/receipt.component';

@Component({
  selector: 'app-medicineshop',
  templateUrl: './medicineshop.component.html',
  styleUrls: ['./medicineshop.component.css']
})
export class MedicineshopComponent implements OnInit {

  constructor() { }
  @ViewChild (ReceiptComponent,{static:false}) receiptComponent:ReceiptComponent;
  searchStock:string;
  searchMedicineByName:boolean;
  searchMedicineByFormula:boolean
  searchOtherStock:boolean;
  searchField:string;
  otherStocks:any[]=[
    {name:'Gloves',pricePerPiece:4,stockLeft:51,formula:'none'},
    {name:'syring',pricePerPiece:5,stockLeft:52,formula:'none'},
    {name:'matter',pricePerPiece:7,stockLeft:53,formula:'none'},
    {name:'others',pricePerPiece:1,stockLeft:54,formula:'none'},
    {name:'pipesr',pricePerPiece:8,stockLeft:57,formula:'none'},
    {name:'dispos',pricePerPiece:2,stockLeft:50,formula:'none'},
  ];
  medicines:any[]=[
    {name:'medi 2',formula:'mole',id:'3',pricePerPiece:3,stockLeft:5,},
    {name:'vara 2',formula:'para',id:'213',pricePerPiece:3,stockLeft:76},
    {name:'chap 2',formula:'ceta',id:'235',pricePerPiece:16,stockLeft:52},
    {name:'cure 2',formula:'para',id:'24',pricePerPiece:2,stockLeft:5},
    {name:'cine 2',formula:'para',id:'45',pricePerPiece:5,stockLeft:56},
    {name:'anna 2',formula:'ceta',id:'73',pricePerPiece:7,stockLeft:50},
    {name:'jone 2',formula:'para',id:'99',pricePerPiece:11,stockLeft:45},
    {name:'elec 2',formula:'mole',id:'93',pricePerPiece:37,stockLeft:51},
  ];
  ngOnInit(): void {
    this.searchMedicineByName=true;
    this.searchMedicineByFormula=false;
    this.searchOtherStock=false;
  }
  onSelect(medicine:any){
    console.log(medicine);
  }
  ModifyMedicineStock(){}
  ModifyOtherStock(){}
  searchBy(num:number){
    if(num==1){
      this.searchMedicineByName=true;
      this.searchMedicineByFormula=false;
      this.searchOtherStock=false;
    }
    else if(num==2){
      this.searchMedicineByName=false;
      this.searchMedicineByFormula=true;
      this.searchOtherStock=false;
    }
    else {
      this.searchMedicineByName=false;
      this.searchMedicineByFormula=false;
      this.searchOtherStock=true;
    }
  }

  addMedicineToReceipt(medicine:any){
    this.receiptComponent.receipt.push(medicine,1);
    console.log(medicine);
  }
  addStockToReceipt(otherStock:any){
    this.receiptComponent.receipt.push(otherStock,2);
    console.log(otherStock);
  }

  addMedicineStock(){}
  addOtherStock(){}

}
