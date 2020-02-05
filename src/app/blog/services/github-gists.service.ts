import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GithubGist, GithubUser } from '../models/github-gist';

@Injectable({
  providedIn: 'root'
})
export class GithubGistsService {

  public githubGists: GithubGist[] = [];

  constructor(private http: HttpClient) {
    this.getGists().subscribe(githubGists => {
      this.githubGists = githubGists;
      this.githubGists.forEach(githubGist => this.getGistContent(githubGist));
    });
  }

  private getGists(): Observable<GithubGist[]> {
    return this.http.get<GithubGist[]>("https://api.github.com/users/lukehoel/gists");
  }

  private getGistContent(githubGist: GithubGist) {
    Object.values(githubGist.files).forEach(value => {
      this.http.get(value.raw_url, { responseType: 'text' }).subscribe(rawData => githubGist.content = rawData)
    });
  }

}
