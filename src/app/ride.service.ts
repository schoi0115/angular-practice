import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ride } from './ride';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  // provideRides() {
  //   return this.rideTable;
  // }
  provideRides() {
    return this.http.get<Ride[]>("http://localhost:4200/assets/rides.json");
  }
  constructor(private http:HttpClient) { }
}
