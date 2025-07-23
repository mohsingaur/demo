import { Component, Input } from '@angular/core';
import { IBlog } from '../blogs.model';

@Component({
  selector: 'app-blog-cards',
  imports: [],
  templateUrl: './blog-cards.html',
  styleUrl: './blog-cards.css'
})
export class BlogCards {
  @Input({ required: true }) blogsData?: IBlog[];

  readBlog(e:any){
    console.log(e);
  }


}
