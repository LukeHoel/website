import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogs().subscribe((data) => console.error(data));
  }

}
