import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubGistsService } from '../../services/github-gists.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  id: string;
  constructor(private route: ActivatedRoute, private githubGistsService: GithubGistsService) {
    route.params.subscribe(({ id }) => this.id = id);
  }
  githubGists = () => this.githubGistsService.githubGists.filter(githubGist => githubGist.id === this.id);
}
