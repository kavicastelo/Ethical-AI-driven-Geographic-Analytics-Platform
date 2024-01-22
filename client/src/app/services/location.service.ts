import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LocationModel} from "../shared/model/Location.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAllLocations() {
    return this.http.get(this.baseUrl + 'locations');
  }

  public getLocationById(id: number) {
    return this.http.get(this.baseUrl + 'locations/' + id);
  }

  public deleteLocation(id: number) {
    return this.http.delete(this.baseUrl + 'locations/delete/' + id);
  }

  public createLocation(l: LocationModel) {
    return this.http.post(this.baseUrl + 'locations', {
      name: l.name,
      code: l.code,
      type: l.type
    });
  }

  public updateLocation(l: LocationModel) {
    return this.http.put(this.baseUrl + 'locations/update/' + l.id, {
      name: l.name,
      code: l.code,
      type: l.type
    });
  }
}
