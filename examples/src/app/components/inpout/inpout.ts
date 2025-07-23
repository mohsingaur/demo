import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Rect } from './rect/rect';

@Component({
  selector: 'app-inpout',
  imports: [FormsModule, Rect],
  templateUrl: './inpout.html',
  styleUrl: './inpout.css'
})
export class Inpout {

  recSize = {
    height: '200',
    width: '200'
  }

}
