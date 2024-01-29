import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BlogModel} from "../shared/model/Blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllBlogs(): Observable<any> {
    return this.http.get(this.baseUrl + 'blog/all');
  }

  public getBlogById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'blog/' + id);
  }

  public deleteBlog(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'blog/delete/' + id);
  }

  public createBlog(b: BlogModel): Observable<any> {
    return this.http.post(this.baseUrl + 'blog/create', {
      title: b.title,
      description: b.description,
      content: b.content,
      image: b.image,
      tags: b.tags,
      created_at: b.created_at,
      updated_at: b.updated_at,
      author: b.author
    });
  }

  public updateBlog(b: BlogModel): Observable<any> {
    return this.http.put(this.baseUrl + 'blog/update/' + b.id, {
      title: b.title,
      description: b.description,
      content: b.content,
      image: b.image,
      tags: b.tags,
      created_at: b.created_at,
      updated_at: b.updated_at,
      author: b.author
    });
  }
}
