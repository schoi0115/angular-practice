import { Pipe, PipeTransform } from '@angular/core';
import { Ride } from './ride';

@Pipe({
  name: 'sortRide'
})
export class SortRidePipe implements PipeTransform {

  transform(inputRides: any[], sortByProperty: string): Ride[] {
    let rides = [...inputRides];
    return rides.sort((r1, r2) => {
      if (r1[sortByProperty] > r2[sortByProperty]) return 1;
      if (r1[sortByProperty] < r2[sortByProperty]) return -1;
      return 0;

    });
  }

}
