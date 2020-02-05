import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  markdown: string;
  constructor(public route: ActivatedRoute) {
    // route.params.subscribe(({ id }) => this.blogsService.getBlog(id).subscribe(markdown => this.markdown = markdown));
  }
}
