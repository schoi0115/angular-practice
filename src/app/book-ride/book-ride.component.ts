import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Ride } from '../ride';
import { RideService } from '../ride.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.scss']
})
export class BookRideComponent implements OnInit {

  constructor(private rideService: RideService) { }
  rides: Ride[] = [];

  errorMessage = "";
  indexToBgBolor = -1;
  sortBy: string = "id";
  filterBy = 'all';
  showPara = false;
  changeColor() {
  }
  tableColor = 'table-primary';
  tableClasses = [
    'table-hover', this.tableColor
  ];



  ngOnInit(): void {
    this.rideService.provideRides().subscribe(
      rideArr => {this.rides = rideArr},
      err => { 
        console.log(err)
        this.errorMessage = "Rides could not be fetched" }
    );
  }

}
