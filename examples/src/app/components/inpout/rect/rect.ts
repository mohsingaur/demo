import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.html',
  styleUrl: './rect.css'
})
export class Rect implements OnChanges {

  // @Input() size!: {height: string, width: string }
  // @Output() sizeChange = new EventEmitter<{height: string, width: string }>();

  size = model.required<{height: string, width: string }>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.size);
  }

  onReset(){
    // this.sizeChange.emit({
    this.size.set({
      height: '100',
      width: '100'
    })
  }

}
