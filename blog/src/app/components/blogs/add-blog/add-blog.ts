import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  imports: [FormsModule],
  templateUrl: './add-blog.html',
  styleUrl: './add-blog.css'
})
export class AddBlog {
  title!: string;
  content!: string;

  @Output() closeEvent = new EventEmitter();
  @Output() dataEvent = new EventEmitter();

  close() {
    this.closeEvent.emit(false);
  }

  save() {
    this.dataEvent.emit({
      blogId: 10,
      userId: 1,
      title: this.title,
      content: this.content,
      image: 'https://picsum.photos/id/120/250/150',
      imageTitle: 'img title',
      tags: null,
      status: 'published',
      likes: 0,
      comments: []
    });
    this.closeEvent.emit(false);
  }
}
