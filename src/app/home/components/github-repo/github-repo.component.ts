import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubRepo } from 'src/app/home/models/github-repo';

@Component({
  selector: 'app-github-repo',
  templateUrl: './github-repo.component.html',
  styleUrls: ['./github-repo.component.scss']
})
export class GithubRepoComponent implements OnInit {
  @Input() githubRepo: GithubRepo;
  @Output() selectGithubRepo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
