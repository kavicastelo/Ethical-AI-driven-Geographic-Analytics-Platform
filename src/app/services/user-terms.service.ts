import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserTermsModel} from "../shared/model/UserTerms.model";

@Injectable({
  providedIn: 'root'
})
export class UserTermsService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllUserTerms(): Observable<any> {
    return this.http.get(this.baseUrl + 'user-terms');
  }

  public getUserTermsById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'user-terms/' + id);
  }

  public createUserTerms(ut: UserTermsModel): Observable<any> {
    return this.http.post(this.baseUrl + 'user-terms', {
      content: ut.content,
      date: ut.date
    });
  }

  public updateUserTerms(ut: UserTermsModel): Observable<any> {
    return this.http.put(this.baseUrl + 'user-terms/' + ut.id, {
      content: ut.content,
      date: ut.date
    });
  }
}
