import { Component, OnInit, Input, Output } from '@angular/core';
import { GithubRepo } from 'src/app/models/timeline-item';
import { GithubReposService } from 'src/app/services/github-repos.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @Input() startYear = 2017;
  @Input() endYear = new Date().getFullYear();
  @Input() selectedYear = this.endYear;
  yearsToShow: number[];
  ngOnInit() {
    this.yearsToShow = new Array(this.endYear - this.startYear + 1).fill(0).map((a, i) => this.endYear - i);
  }
}