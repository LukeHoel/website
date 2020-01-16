import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { GithubRepo } from '../models/timeline-item';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http: HttpClient) { }
  getRepos(): Observable<GithubRepo[]> {
    return this.http.get<GithubRepo[]>("https://api.github.com/users/lukehoel/repos");
  }
  getReadme(githubRepo: GithubRepo): Observable<any> {
    return this.http.get<any>(`${githubRepo.url}/readme`).pipe(
      mergeMap(initialResult => this.http.get(initialResult.download_url, { responseType: 'text' }))
    );
  }
}
