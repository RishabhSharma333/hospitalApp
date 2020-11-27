import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor() { }
  receipt:any[]=[];
  ngOnInit(): void {
  }
  push(value:any,num:number){
    if(num==1){
    this.receipt.push(value);
    }
    else{
      this.receipt.push(value);
    }
  }

}
