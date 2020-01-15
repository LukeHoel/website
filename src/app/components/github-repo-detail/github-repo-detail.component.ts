import { Component, OnInit, Input, Output, EventEmitter, Sanitizer } from '@angular/core';
import { GithubRepo } from 'src/app/models/timeline-item';
import * as marked from 'marked';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { GithubReposService } from 'src/app/services/github-repos.service';
@Component({
  selector: 'app-github-repo-detail',
  templateUrl: './github-repo-detail.component.html',
  styleUrls: ['./github-repo-detail.component.scss']
})
export class GithubRepoDetailComponent implements OnInit {
  @Input() githubRepo: GithubRepo;
  @Output() back = new EventEmitter();
  markDown: SafeHtml;
  constructor(private domSanitizer: DomSanitizer, private githubReposService: GithubReposService) { }

  ngOnInit() {

    this.githubReposService.getReadme(this.githubRepo).subscribe(markDown =>
      this.markDown = this.domSanitizer.bypassSecurityTrustHtml(marked(markDown)));
  }

}
