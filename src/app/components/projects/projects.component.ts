import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = projects;
}