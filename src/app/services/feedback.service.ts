import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient:HttpClient) { }

  public feedbackLogin():Observable<any>{
    return this.httpClient.get("http://localhost:3269/api/v1/feedback-login");
  }

}
