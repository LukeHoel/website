import { Component, OnInit, Input, Output, EventEmitter, Sanitizer } from '@angular/core';
import { GithubRepo } from 'src/app/home/models/github-repo';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GithubReposService } from 'src/app/home/services/github-repos.service';
@Component({
  selector: 'app-github-repo-detail',
  templateUrl: './github-repo-detail.component.html',
  styleUrls: ['./github-repo-detail.component.scss']
})
export class GithubRepoDetailComponent implements OnInit {
  @Input() githubRepo: GithubRepo;
  @Output() back = new EventEmitter();
  markdown: string;
  constructor(private githubReposService: GithubReposService) { }

  ngOnInit() {
    this.githubReposService.getReadme(this.githubRepo).subscribe(markdown => this.markdown = markdown);
  }

}
