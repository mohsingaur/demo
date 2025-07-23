import { Component } from '@angular/core';

@Component({
  selector: 'app-templateref',
  imports: [],
  templateUrl: './templateref.html',
  styleUrl: './templateref.css'
})
export class Templateref {
  title: HTMLInputElement | undefined;

  onSubmit(){}
}
