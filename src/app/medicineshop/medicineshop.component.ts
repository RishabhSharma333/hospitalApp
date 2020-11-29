import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReceiptComponent } from './receipt/receipt.component';

@Component({
  selector: 'app-medicineshop',
  templateUrl: './medicineshop.component.html',
  styleUrls: ['./medicineshop.component.css']
})
export class MedicineshopComponent implements OnInit {

  constructor() { }
  @ViewChild(ReceiptComponent, { static: false }) receiptComponent: ReceiptComponent;
  searchStock: string;
  searchMedicineByName: boolean;
  searchMedicineByFormula: boolean
  searchOtherStock: boolean;
  searchField: string;
  isModalActive:boolean;
  otherStocks:any[]=[];
  medicines:any[]=[];
  modalMedicine:boolean=false;
  modalItem:boolean=false;
  formPrice:number;
  formName:string='';
  formFormula:string='';
  
  ngOnInit(): void {
    this.searchMedicineByName = true;
    this.searchMedicineByFormula = false;
    this.searchOtherStock = false;
    this.isModalActive=false;

      this.otherStocks=[
        {name: 'syring', pricePerPiece: 5, formula: 'none',stockLeft:43},
        {name: 'Gloves', pricePerPiece: 4, formula: 'none',stockLeft:42}, 
        {name: 'matter', pricePerPiece: 7, formula: 'none',stockLeft:41},
        {name: 'others', pricePerPiece: 1,formula: 'none',stockLeft:54},
        {name: 'pipesr', pricePerPiece: 8,formula: 'none',stockLeft:57},
        {name: 'dispos', pricePerPiece: 2,formula: 'none',stockLeft:50},
      ];
      this.medicines=[
        { name: 'medi 2', formula: 'mole', id: '31', pricePerPiece: 30,stockLeft:53},
        { name: 'vara 2', formula: 'para', id: '24', pricePerPiece: 31,stockLeft:23},
        { name: 'chap 2', formula: 'ceta', id: '25', pricePerPiece: 16,stockLeft:63},
        { name: 'cure 2', formula: 'para', id: '24', pricePerPiece: 20,stockLeft:27},
        { name: 'cine 2', formula: 'para', id: '45', pricePerPiece: 57,stockLeft:13},
        { name: 'anna 2', formula: 'ceta', id: '73', pricePerPiece: 78,stockLeft:20},
        { name: 'jone 2', formula: 'para', id: '99', pricePerPiece: 11,stockLeft:73},
        { name: 'elec 2', formula: 'mole', id: '93', pricePerPiece: 37,stockLeft:29},
      ];

    
    
  }
  onSelect(medicine: any) {
    console.log(medicine);
  }
  searchBy(num: number) {
    if (num == 1) {
      this.searchMedicineByName = true;
      this.searchMedicineByFormula = false;
      this.searchOtherStock = false;
    }
    else if (num == 2) {
      this.searchMedicineByName = false;
      this.searchMedicineByFormula = true;
      this.searchOtherStock = false;
    }
    else {
      this.searchMedicineByName = false;
      this.searchMedicineByFormula = false;
      this.searchOtherStock = true;
    }
  }

  addItemToReceipt(Item: any) {
    if (this.receiptComponent.totalBill == 0&&(!this.isModalActive)) {
      Item.quantity = 1;
      this.receiptComponent.receipt.add(Item);
      console.log(this.receiptComponent.receipt);
    }

  }
  
  toggleModal(){
    this.isModalActive = !this.isModalActive;
  }
  modifyItem(item:any){
    this.modalItem=true;
    this.modalMedicine=false;

    this.toggleModal();

  }
  modifyMedicine(medicine:any){
    this.modalItem=false;
    this.modalMedicine=true;
    this.toggleModal();

  }
  onEditMedicineStockForm(stockForm:NgForm){
    console.log(stockForm);
  }
  addMedicineStock() { 
    this.modalItem=false;
    this.modalMedicine=true;
    this.toggleModal();
  }
  addOtherStock() {
    this.modalItem=true;
    this.modalMedicine=false;
    this.toggleModal();
  }

}
