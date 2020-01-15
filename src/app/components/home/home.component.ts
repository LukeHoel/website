import { Component, OnInit, ViewChild } from '@angular/core';
import { TimelineComponent } from '../timeline/timeline.component';
import { GithubReposService } from 'src/app/services/github-repos.service';
import { GithubRepo } from 'src/app/models/timeline-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  githubRepos: GithubRepo[];
  selectedGithubRepo: GithubRepo;
  constructor(private githubReposService: GithubReposService) { }

  ngOnInit() {
    this.githubReposService.getRepos().subscribe(githubRepos => this.githubRepos = githubRepos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
  }

}
