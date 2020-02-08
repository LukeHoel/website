import { Component, OnInit, Input } from '@angular/core';
import { GithubGist, GithubUser } from '../../models/github-gist';

@Component({
  selector: 'app-blog-poster',
  templateUrl: './blog-poster.component.html',
  styleUrls: ['./blog-poster.component.scss']
})
export class BlogPosterComponent {
  @Input() githubGist: GithubGist;
}
