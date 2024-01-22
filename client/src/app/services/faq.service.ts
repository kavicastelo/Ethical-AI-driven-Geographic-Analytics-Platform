import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FAQModel} from "../shared/model/FAQ.model";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllFAQs(): Observable<any> {
    return this.http.get(this.baseUrl + 'faq/all');
  }

  public getFAQById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + 'faq/' + id);
  }

  public deleteFAQ(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'faq/delete/' + id);
  }

  public createFAQ(faq: FAQModel): Observable<any> {
    return this.http.post(this.baseUrl + 'faq', {
      question: faq.question,
      answer: faq.answer
    });
  }

  public updateFAQ(faq: FAQModel): Observable<any> {
    return this.http.put(this.baseUrl + 'faq/update/' + faq.id, {
      id: faq.id,
      question: faq.question,
      answer: faq.answer
    });
  }
}
