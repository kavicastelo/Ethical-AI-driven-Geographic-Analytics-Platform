import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {AuthModel} from "../shared/model/Auth.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public setCredentials(c: AuthModel): Observable<any> {
    return this.http.post(this.baseUrl + 'login/save', {
      id: c.id,
      email: c.email,
      password: c.password
    })
  }

  public deleteCredentials(id:any): Observable<any> {
    return this.http.delete(this.baseUrl + 'login/delete/' + id);
  }

  public getCredentials(): Observable<any> {
    return this.http.get(this.baseUrl + 'login/get')
  }

  public getCredentialByEmail(email: any): Observable<any> {
    return this.http.get(this.baseUrl + 'login/email/' + email);
  }

  public updateCredentialsByEmail(c: AuthModel): Observable<any> {
    return this.http.put(this.baseUrl + 'login/update/' + c.email, {
      email: c.email,
      password: c.password
    })
  }
}
