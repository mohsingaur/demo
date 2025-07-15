import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IEmiForm } from './emiform.entity';
import { EmiCalulator } from '../services/emi-calulator';

@Component({
  selector: 'app-emi',
  imports: [FormsModule],
  templateUrl: './emi.html',
  styleUrl: './emi.css'
})
export class Emi {
  date = new Date().toDateString();
  
  principal: string = '10000';
  tenure: string = '5';
  roi: string = '12';
  startDate: string = this.date;

  constructor(private emiService: EmiCalulator){}

  calculate(){
    this.emiService.calculateEmi({
      principal: +this.principal,
      tenure: +this.tenure,
      roi: +this.roi,
      startDate: this.startDate
    });
  }

}
