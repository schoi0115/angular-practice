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
  rideTable: Ride[] = [];
  ngOnInit(): void {
    this.rideService.provideRides().subscribe(
      rideArr => this.rideTable = rideArr, 
      err => {}
    );
  }

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



}
