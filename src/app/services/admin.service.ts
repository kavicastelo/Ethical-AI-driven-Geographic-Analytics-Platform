import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AdminsModel} from "../shared/model/Admins.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllAdmins(): Observable<any> {
    return this.http.get(this.baseUrl + 'admin/all');
  }

  public getAdminById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'admin/' + id);
  }

  public deleteAdmin(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'admin/delete/' + id);
  }

  public createAdmin(admin: AdminsModel): Observable<any> {
    return this.http.post(this.baseUrl + 'admin', {
      name: admin.name,
      email: admin.email,
      phone: admin.phone,
      password: admin.password
    });
  }

  public updateAdmin(admin: AdminsModel): Observable<any> {
    return this.http.put(this.baseUrl + 'admin/update/' + admin.id, {
      name: admin.name,
      email: admin.email,
      phone: admin.phone,
      password: admin.password
    });
  }
}
