import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UsersModel} from "../shared/model/Users.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public createUser(u: UsersModel): Observable<any> {
    return this.http.post(this.baseUrl + 'user/request', {
      name: u.name,
      email: u.email,
      phone: u.phone,
      country: u.country,
      remarks: u.remarks,
      active: false
    });
  }

  public getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'user/all');
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'user/' + id);
  }

  public getUserByEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + 'user/email/' + email);
  }

  public updateUser(u: UsersModel): Observable<any> {
    return this.http.put(this.baseUrl + 'user/update/' + u.id, {
      name: u.name,
      email: u.email,
      phone: u.phone,
      country: u.country,
      remarks: u.remarks,
      active: u.active
    });
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'user/delete/' + id);
  }
}
