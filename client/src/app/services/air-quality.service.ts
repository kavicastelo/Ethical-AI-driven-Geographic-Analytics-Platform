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

  public predictPm25(airQuality: AirQualityPredictModel): Observable<any>{
    return this.http.post(this.baseUrl + 'airQuality/predict/pm25', {
      pm10: airQuality.pm10,
      co2: airQuality.co2,
      ozone: airQuality.ozone,
      no2: airQuality.no2,
      temperature: airQuality.temperature,
      humidity: airQuality.humidity,
      windSpeed: airQuality.windSpeed
    })
  }
}
