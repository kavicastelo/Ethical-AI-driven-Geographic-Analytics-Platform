import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {

  baseUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  public getAllAirQuality(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllAirQuality')
  }

  public predictPm25(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/pm25', data)
  }

  public predictPm10(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/pm10', data)
  }

  public predictCo2(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/co2', data)
  }

  public predictOzone(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/ozone', data)
  }

  public predictNo2(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/no2', data)
  }
}
