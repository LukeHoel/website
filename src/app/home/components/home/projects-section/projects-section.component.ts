import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/data';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent {
  projects = projects;
}
