import { Component, OnInit } from '@angular/core';

class Project {
  name: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects: Project[] = [{ name: "Test1" }, { name: "Test2" }];

  ngOnInit() {
  }

}
