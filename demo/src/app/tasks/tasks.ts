import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task/task';
import { ITasks } from './tasks.model';
import { Addtask } from './addtask/addtask';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, Addtask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks implements OnInit {
  @Input() userId!: number;
  @Input() name!: string;
  // tasks!:ITasks[]
  isTaskModalOpen = false;
  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.taskService.getAllFacts();
    // this.tasks = this.taskService.getAllFacts();
  }

  get userTasks(){
    return this.taskService.getFactsByUserId(this.userId);
  }

  // addNewTask(task:any){
  //   this.isTaskModalOpen = false;
  // }
  openTaskModal(){
    this.isTaskModalOpen = !this.isTaskModalOpen
  }
  closeTaskModal(val:boolean){
    this.isTaskModalOpen = false;
  }

  // completeTask(id:number){
    // this.tasks = this.tasks.filter(task=>task.id!==id);
    // this.taskService.removeFacts(id);
  // }
}
