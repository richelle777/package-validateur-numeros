import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-phonenumber',
  templateUrl: './phonenumber.component.html',
  styleUrls: ['./phonenumber.component.css']
})

export class PhonenumberComponent implements OnInit {
  country  = [
    { name: "Belgique" , iso:"be", reg: ["^(\\+?32|0032)?[0-9]{8}$"] , indicative : "+32"},
    { name: "Cameroun" , iso:"cm", reg: /^((\+)237|00237)(6|2)(\d{2}){4}$/ , indicative : "+237"},
    { name: "Etats Unis" , iso:"us",  reg: /^((\+)1|001)[1-9](\d{2}){4}$/ , indicative : "+1"},
    { name: "France" , iso:"fr", reg: /^((\+)33|0|0033)[1-9](\d{2}){4}$/ , indicative : "+33"},
    { name: "Inde" , iso:"in",reg: /^((\+)91|0091)[1-9](\d{2}){4}$/ , indicative : "+91"},
    { name: "Nigeria" , iso:"ng",  reg: /^((\+)234|00234)[1-9](\d{2}){4}$/ , indicative : "+234"},
    { name: "Portugal" , iso:"pt", reg: "^((\\+)241)[0-9]{8}$/," , indicative : "351"},
    { name: "Russie" , iso:"ru", reg: ["^(\\+?7|007)?[0-9]{9}$"] , indicative : "+7"},
    { name: "Tunisie" , iso:"tn", reg: "^((\\+)241)[0-9]{8}$/," , indicative : "+216"},
    { name: "Zimbabwe" , iso:"zw", reg: "^((\\+)263)[0-9]{8}$/," , indicative : "+263"},
    
  ];
  defaultTel = "";
  txtTel! :  string;
  errorMessage! : string ;
  countrySelected  : any;
  count : any;
  countrySelectIso = "";
  isCorrect = true;
  isTyping = false;
  constructor() {
    
   }
  
  ngOnInit(): void {
    const nb = Math.floor(Math.random() * (this.country.length -1 - 0 + 1)) + 0;
    this.countrySelectIso = this.country[nb].iso;
    this.countrySelected = this.country[nb].name;
    this.defaultTel = this.country[nb].indicative;
  }
  changeCountry(event:any) {
    const index = this.country.findIndex( (element:any) => element.name === event.target.value); 
    this.countrySelectIso = this.country[index].iso;
    this.txtTel = this.country[index].indicative;
    // this.defaultTel = this.country[index].defaultvalue;
    // this.countrySelected = this.country[index].iso;
  }
  formatPhoneNumber(value:any) {
    if(!value)
      return value;
      const phoneNumber = value.replace(/[^\d]/g , '');
      const phoneNumberLength = phoneNumber.length;
      if(phoneNumberLength < 4)
        return phoneNumber;
      if(phoneNumberLength < 7){
        return '('+phoneNumber.slice(0 ,3)+')' + ' ' + phoneNumber.slice(3);
      } 
      return '('+phoneNumber.slice(0 ,3)+')' + ' ' + phoneNumber.slice( 3 , 6 ) + '-' + phoneNumber.slice(6 , 9)+ '-' + phoneNumber.slice(9 , 12);
  }
  phoneNumberFormatter(){
    var inputField = this.txtTel;
    const formattedInputValue = this.formatPhoneNumber(inputField);
    inputField = formattedInputValue;
  }
  
  @Output() childEvent = new EventEmitter();

  emit(keyword:any){
    this.isTyping = true;
    this.errorMessage = ""
    const index = this.country.findIndex( (element:any) => new RegExp(element.reg).test(keyword)) ; 
    const index2= this.country.findIndex( (element:any) => element.indicative === keyword) ; 
  
    if(index2!=-1){
      this.countrySelected = this.country[index2].name;
      this.countrySelectIso = this.country[index2].iso;
    }
  
    if(index == -1)
      this.isCorrect = false;
    
    else
      this.isCorrect = true;
  
    this.childEvent.emit(keyword);
    
  }
}

