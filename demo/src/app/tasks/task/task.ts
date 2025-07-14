import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type ITasks } from '../tasks.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: ITasks;
  // @Output() complete = new EventEmitter();

  private taskService = inject(TaskService);

  taskDone(id:number){
    // this.complete.emit(id);
    this.taskService.removeFacts(id);
  }
}
