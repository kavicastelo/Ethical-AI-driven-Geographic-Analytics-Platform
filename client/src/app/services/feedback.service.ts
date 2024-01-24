import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {FeedbackModel} from "../shared/model/Feedback.model";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl=environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  public getAllFeedback():Observable<any>{
    return this.httpClient.get(this.baseUrl+"feedback/all");
  }

  public getFeedbackById(id:number):Observable<any>{
    return this.httpClient.get(this.baseUrl+"feedback/"+id);
  }

  public deleteFeedback(id:number):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"feedback/delete/"+id);
  }

  public createFeedback(f:FeedbackModel):Observable<any>{
    return this.httpClient.post(this.baseUrl+"feedback/save",{
      name:f.name,
      family_name:f.family_name,
      email:f.email,
      picture:f.picture,
      feedback:f.feedback,
      date:f.date
    });
  }

  public updateFeedback(f:FeedbackModel):Observable<any>{
    return this.httpClient.put(this.baseUrl+"feedback/update/"+f.id,{
      name:f.name,
      family_name:f.family_name,
      email:f.email,
      picture:f.picture,
      feedback:f.feedback,
      date:f.date
    });
  }

}
