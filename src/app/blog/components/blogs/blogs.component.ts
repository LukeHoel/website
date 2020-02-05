import { Component, OnInit } from '@angular/core';
import { GithubGistsService } from '../../services/github-gists.service';
import { GithubGist } from '../../models/github-gist';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  constructor(private githubGistsService: GithubGistsService) { }
  ngOnInit() {
  }
  githubGists = () => this.githubGistsService.githubGists;
}
