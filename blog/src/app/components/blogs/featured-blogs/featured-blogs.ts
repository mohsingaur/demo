import { Component, Input } from '@angular/core';
import { IBlog } from '../blogs.model';

@Component({
  selector: 'app-featured-blogs',
  imports: [],
  templateUrl: './featured-blogs.html',
  styleUrl: './featured-blogs.css'
})
export class FeaturedBlogs {

  @Input() featureBlogs!: IBlog[];

}
