import { Component, OnInit } from '@angular/core';
import { BlogCards } from './blog-cards/blog-cards';
import { FeaturedBlogs } from './featured-blogs/featured-blogs';
import { ApiService } from '../../services/api-service';
import { ApiConstants } from '../../constants/api-constants';
import { IBlog } from './blogs.model';
import { AddBlog } from './add-blog/add-blog';
import { Blog } from './blog/blog';

@Component({
  selector: 'app-blogs',
  imports: [BlogCards, FeaturedBlogs, AddBlog, Blog],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css',
})
export class Blogs implements OnInit {
  showBlogForm = false;
  featuredBlogs!: IBlog[];
  isBlog = false;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    // this.apiService.get(ApiConstants.GET_BLOGS, (resp: any) => {
    //   console.log(resp);
    // })
    this.featuredBlogs = this.blogs.filter(blog=>blog.featured == true);
  }

  openBlogDialog(){
    this.showBlogForm = !this.showBlogForm;
  }
  closeDialog(e:boolean){
    this.showBlogForm = e;
  }

  addBlog(data:any){
    this.blogs.push(data);
  }

  blogs:IBlog[] = [
    {
    blogId: 1,
    userId: 1,
    title: 'The Art of Slow Living',
    content: 'Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. ',
    image: 'https://picsum.photos/id/141/250/150',
    imageTitle: '',
    featured: false
  },
  {
    blogId: 2,
    userId: 1,
    title: 'Internal as a source is Kinesis Service',
    content: 'Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. ',
    image: 'https://picsum.photos/id/142/250/150',
    imageTitle: '',
    featured: false
  },
  {
    blogId: 3,
    userId: 2,
    title: 'Sync Job and Normal job',
    content: 'Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. ',
    image: 'https://picsum.photos/id/143/250/150',
    imageTitle: '',
    featured: true
  },
  {
    blogId: 4,
    userId: 2,
    title: 'The Art of Slow Living',
    content: 'Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. ',
    image: 'https://picsum.photos/id/1/250/150',
    imageTitle: '',
    featured: false
  },
  {
    blogId: 5,
    userId: 1,
    title: 'The Art of Slow Living',
    content: 'Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. Discover how embracing simplicity can enrich your daily life. A thoughtful guide to slowing down and finding joy in the everyday. ',
    image: 'https://picsum.photos/id/145/250/150',
    imageTitle: '',
    featured: false
  },
  {
    blogId: 6,
    userId: 1,
    title: 'The Power of Morning Routines',
    content: 'Explore how morning habits can boost your focus and energy for the rest of the day.',
    image: 'https://picsum.photos/id/100/250/150',
    imageTitle: '',
    featured: false
  },
  {
    blogId: 7,
    userId: 1,
    title: 'Minimalist Home Office Ideas',
    content: 'Create a productivity-friendly space with minimalist design tips for any room.',
    image: 'https://picsum.photos/id/101/250/150',
    imageTitle: '',
    featured: true
  },
  {
    blogId: 8,
    userId: 1,
    title: 'Mastering Mindful Productivity',
    content: 'Combine mindfulness with productivity strategies to get more done with less stress.',
    image: 'https://picsum.photos/id/102/250/150',
    imageTitle: '',
    featured: true
  }
  ]
}
