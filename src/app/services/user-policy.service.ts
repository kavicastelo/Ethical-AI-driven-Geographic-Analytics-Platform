import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserPolicyModel} from "../shared/model/UserPolicy.model";

@Injectable({
  providedIn: 'root'
})
export class UserPolicyService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllUserPolicies(): Observable<any> {
    return this.http.get(this.baseUrl + 'UserPolicy/');
  }

  public getUserPolicyById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'UserPolicy/' + id);
  }

  public createUserPolicy(up: UserPolicyModel): Observable<any> {
    return this.http.post(this.baseUrl + 'UserPolicy/', {
      markdownContent: up.markdownContent,
      date: up.date
    });
  }

  public updateUserPolicy(up: UserPolicyModel): Observable<any> {
    return this.http.put(this.baseUrl + 'UserPolicy/' + up.id, {
      markdownContent: up.markdownContent,
      date: up.date
    });
  }

  public deleteUserPolicy(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'UserPolicy/' + id);
  }
}
