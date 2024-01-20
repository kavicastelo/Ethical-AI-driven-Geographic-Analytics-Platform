import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public sendMessage(name: any, email: any, message: any) {
    return this.http.post(this.baseUrl + 'contact', {
      name: name,
      email: email,
      message: message
    });
  }
}
