import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './templates/header/header';
import { Blogs } from './components/blogs/blogs';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Blog } from './components/blogs/blog/blog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Blogs, Login, Signup, Blog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('blog');
  isLogin = false;
}
