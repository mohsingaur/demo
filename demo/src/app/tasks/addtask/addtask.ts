import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-addtask',
  imports: [FormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css'
})
export class Addtask {
  title!: string;
  fact!: string;
  date!: string;
  @Input() userId!: number;
  // @Output() newFact = new EventEmitter<{title: string, fact: string, date: string }>();
  @Output() cancel = new EventEmitter();
  private taskService = inject(TaskService);
  close(){
    this.cancel.emit(false);
  }

  save(){
    // console.log({title:this.title, fact: this.fact, date:this.date});
    this.taskService.addFact({
      title: this.title,
      fact: this.fact,
      date: this.date
    },this.userId);
    this.cancel.emit(false);
  }

}
