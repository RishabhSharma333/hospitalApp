import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {
// doctor patient appointment info
// know patient-bed mapping
//

  constructor() { }
  patientsInfo:any[];
  searchPatient:string;
  ngOnInit(): void {
    
  }
  //get patients according to ward to distribute 
  getPatientsWardOne(){
    return [
      {name:'Random Name_1',age:43,gender:'Female',fathersName:'2_Father',id:'MH_02',ward:'ward_23',bed:'bed_22'},
      {name:'Random Name_3',age:98,gender:'Female',fathersName:'4_Father',id:'MH_04',ward:'ward_23',bed:'bed_42'},
      {name:'Random Name_5',age:43,gender:'Male'  ,fathersName:'6_Father',id:'MH_06',ward:'ward_23',bed:'bed_62'},
      {name:'Random Name_9',age:23,gender:'Female',fathersName:'9_Father',id:'MH_09',ward:'ward_23',bed:'bed_92'},
    ];
  }
  getPatientsWardTwo(){
    return [
      {name:'Random Name_0lonng and',age:42,gender:'Male  ',fathersName:'1_Father also',id:'MH_01',ward:'ward_24',bed:'bed_32'},
      {name:'Random Name_4',age:45,gender:'Male'  ,fathersName:'5_Father',id:'MH_05',ward:'ward_24',bed:'bed_52'},
      {name:'Random Name_7',age:43,gender:'Male'  ,fathersName:'8_Father',id:'MH_08',ward:'ward_24',bed:'bed_82'},
    ];
  }
  getPatientsWardThree(){
    return [
      {name:'Random Name_2',age:34,gender:'Male  ',fathersName:'3_Father',id:'MH_03',ward:'ward_25',bed:'bed_32'},
      {name:'Random Name_5',age:13,gender:'Female',fathersName:'7_Father',id:'MH_07',ward:'ward_25',bed:'bed_72'},
    ];
  }
  getPatientsWardFour(){
    return [
      {name:'Random Name_8',age:53,gender:'Male'  ,fathersName:'0_Father',id:'MH_10',ward:'ward_26',bed:'bed_21'}
    ];
  }

}
