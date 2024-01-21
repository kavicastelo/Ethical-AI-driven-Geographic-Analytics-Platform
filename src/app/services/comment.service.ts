import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentModel} from "../shared/model/Comment.model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllComments(): Observable<any> {
    return this.http.get(this.baseUrl + 'comment/all');
  }

  public getCommentById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'comment/' + id);
  }

  public deleteComment(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'comment/delete/' + id);
  }

  public createComment(c: CommentModel): Observable<any> {
    return this.http.post(this.baseUrl + 'comment/save', {
      blogId: c.blogId,
      name: c.name,
      email: c.email,
      profile: c.profile,
      date: c.date,
      comment: c.comment,
      reply: c.reply,
      like: c.like
    });
  }

  public updateComment(c: CommentModel): Observable<any> {
    return this.http.put(this.baseUrl + 'comment/update/' + c.id, {
      blogId: c.blogId,
      name: c.name,
      email: c.email,
      profile: c.profile,
      date: c.date,
      comment: c.comment,
      reply: c.reply,
      like: c.like
    });
  }

  public likeComment(c: CommentModel): Observable<any> {
    return this.http.put(this.baseUrl + 'comment/like/' + c.id, {
      blogId: c.blogId,
      name: c.name,
      email: c.email,
      profile: c.profile,
      date: c.date,
      comment: c.comment,
      reply: c.reply,
      like: c.like
    });
  }
}
