import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  second: number = 0;
  milisecond: number = 0;

  myInterval: any = 0;
  btnCheck: boolean = false;

  constructor() { }

  startCount() {

    if (this.myInterval == 0) {
      this.myInterval = setInterval(() => {
        this.second++
      }, 1000)

    }

  }
  // startMiliCount(){
  //   if (this.myInterval == 0) {
  //     this.myInterval = setInterval(() => {
  //       this.milisecond++
  //     }, 100)
  //   }

  // }
  stopCount() {
    if (this.myInterval != 0) {
      clearInterval(this.myInterval)
      this.myInterval = 0;
    }
  }
  resetCount() {
    this.second = 0;
  }

  ngOnInit(): void {
  }

}
