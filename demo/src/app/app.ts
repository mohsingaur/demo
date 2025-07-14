import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { IUser, userData } from './localdata/userdata';
import { User } from './sidebar/user';
import { Tasks } from './tasks/tasks';

const index = Math.floor(Math.random()*userData.length);

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users: IUser[] = userData;
  selectedUserId!: number;

  get selectedUser(){
    return userData.find(user=>user.id == this.selectedUserId);
  }

  selectUser(id:number){
    this.selectedUserId = id;
  }

  ngOnInit(){
    // console.log(this.user, index);
  }
  
  
}
