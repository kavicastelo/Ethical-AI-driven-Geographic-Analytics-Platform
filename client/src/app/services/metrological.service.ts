import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MetrologicalService {

  baseUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getAllMetrological(): Observable<any>{
    return this.http.get(this.baseUrl + 'getAllMetrological')
  }

  public predictTemperature(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/temperature', data)
  }

  public predictHumidity(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/humidity', data)
  }

  public predictWindSpeed(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/windSpeed', data)
  }

  public predictPrecipitation(data:any[]): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/precipitation', data)
  }

  public calculateMedian(data:any): Observable<any>{
    return this.http.get(this.baseUrl + 'getMedianMetrological'+data)
  }

  public calculateMode(data:any): Observable<any>{
    return this.http.get(this.baseUrl + 'getModeMetrological'+data)
  }

  public calculateAvgByDateRange(data:any): Observable<any>{
    return this.http.get(this.baseUrl + 'getAverage'+data.factor+'ByDateRange?'+data.dateRange)
  }
}
