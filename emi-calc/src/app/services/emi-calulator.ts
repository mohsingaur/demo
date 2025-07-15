import { Injectable } from '@angular/core';
import { IEmiForm } from '../emi/emiform.entity';
import { IEmi } from '../display-emi/emi.entity';

@Injectable({
  providedIn: 'root'
})
export class EmiCalulator {

  resultData?:IEmi[];

  calculateEmi(obj:IEmiForm){
    const {principal, roi, tenure, startDate} = obj;
    let rate = roi/(12*100);
    let months = tenure*12;
    let interest = principal*rate;
    let monthlyEmi = interest*Math.pow((1+rate),months) / (Math.pow((1+rate),months)-1);
    let balance = principal;
    let totalPrincipalAmount = 0;
    let totalInterestAmount = 0;
    let totalAmount = 0;
    
    let res = [];
    for(let i=0; i<months; i++){
      let monthlyPrinicipal = 0
      let date = new Date(startDate);
      date.setMonth(date.getMonth()+i);
      balance -= monthlyEmi-interest;
      monthlyPrinicipal = monthlyEmi-interest;
      totalPrincipalAmount += monthlyPrinicipal;
      totalInterestAmount += interest;
      totalAmount += monthlyEmi;

      res.push({
          month: i, 
          dueDate: date.toString(), 
          emi: monthlyEmi, 
          interest: interest, 
          principal: monthlyPrinicipal, 
          pos:balance,
          totalPrincipalAmount: totalPrincipalAmount,
          totalInterestAmount: totalInterestAmount,
          totalPayableAmount: totalAmount
        });
      interest = balance*rate;
    }
    this.resultData = res;
    // console.log(this.resultData)
  }
  
}
