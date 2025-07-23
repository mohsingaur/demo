import { Component, signal } from '@angular/core';
import { Templateref } from './components/templateref/templateref';
import { Inpout } from './components/inpout/inpout';
import { TempDrivenForms } from './components/temp-driven-forms/temp-driven-forms';

@Component({
  selector: 'app-root',
  imports: [TempDrivenForms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('examples');
}
