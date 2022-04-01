import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from './ride';

@Pipe({
  name: 'filterRide'
})
export class FilterRidePipe implements PipeTransform {

  transform(inputRides: Ride[], tacoBy:string): Ride[] {
    if(tacoBy=='to') return inputRides.filter(ride=> ride.endPoint.toLowerCase()=='gotham')

    return inputRides;

  }

}
