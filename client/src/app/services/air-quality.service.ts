import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AirQualityPredictModel} from "../shared/model/AirQualityPredict.model";

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
}
