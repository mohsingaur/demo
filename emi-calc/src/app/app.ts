import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Emi } from './emi/emi';
import { FormsModule } from '@angular/forms';
import { DisplayEmi } from './display-emi/display-emi';
import { EmiCalulator } from './services/emi-calulator';
import { IEmi } from './display-emi/emi.entity';
import { IEmiForm } from './emi/emiform.entity';

@Component({
  selector: 'app-root',
  imports: [Emi, DisplayEmi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  
}
