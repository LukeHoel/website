import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubRepo } from '../models/timeline-item';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }
  getRepos(): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>("https://api.github.com/users/lukehoel/repos");
  }
}
