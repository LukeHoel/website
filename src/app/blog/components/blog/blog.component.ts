import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  id: number;
  constructor(public route: ActivatedRoute) {
    route.params.subscribe((params: { id: number }) => this.id = params.id);
  }
}
