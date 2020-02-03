import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  markdown: string;
  constructor(public route: ActivatedRoute, private blogsService: BlogsService) {
    route.params.subscribe(({ id }) => this.blogsService.getBlog(id).subscribe(markdown => this.markdown = markdown));
  }
}
