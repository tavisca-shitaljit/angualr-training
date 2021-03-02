import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  initialNumber ='0';
  firstOperand : any;
  operator : any;
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
  }

  public getValue(v: string){
    
    if(this.waitForSecondNumber)
    {
      this.initialNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.initialNumber === '0'? this.initialNumber = v: this.initialNumber += v;

    }
  }

  getDecimal(){
    if(!this.initialNumber.includes('.')){
        this.initialNumber += '.'; 
    }
  }

  private doCalculation(operator:any , secondOp:any){
    switch (operator){
      case '+':
      return this.firstOperand += secondOp; 
      case '-': 
      return this.firstOperand -= secondOp; 
      case '*': 
      return this.firstOperand *= secondOp; 
      case '/': 
      return this.firstOperand /= secondOp; 
      case '=':
      return secondOp;
    }
  }
  public getOperation(operator: string){

    if(this.firstOperand === null){
      this.firstOperand = Number(this.initialNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.initialNumber))
      this.initialNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = operator;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
 
  }

  public clear(){
    this.initialNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
