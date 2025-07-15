import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { EmiCalulator } from '../services/emi-calulator';

@Component({
  selector: 'app-display-emi',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './display-emi.html',
  styleUrl: './display-emi.css'
})
export class DisplayEmi implements OnInit {
  // private emiService = Inject(EmiCalulator);
  constructor(private emiService: EmiCalulator){}
  get results(){
    return this.emiService.resultData;
  }
  ngOnInit(){
    console.log(this.results);
  }
}
