import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  constructor(private http: HttpClient) { }
  getBlogs(): Observable<string> {
    return this.http.get(`./assets/blogs/tableOfContents`, { responseType: 'text' });
  }
  getBlog(id: string): Observable<string> {
    return this.http.get(`./assets/blogs/${id}`, { responseType: 'text' });
  }
}
