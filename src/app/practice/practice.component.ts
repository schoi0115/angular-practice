import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Login } from '../login';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  count:number = 0;
  salutation:string = "Ms";
  name:string = "";
  increment(){
    this.count++;
  }
  constructor() { }

  allowClick:boolean = true;
  imgUrl="";

// class binder
  // btnClasses = ['btn', 'btn-primary', 'btn-block']

  // btnClasses = 'btn btn-danger btn-block'

  // btnClasses ={
  //   'btn': true,
  //   'btn-success': true,
  //   'btn-block': true
  // };
  btnColor = 'btn-primary';
  btnClasses =[
    'btn', this.btnColor

  ];

  changeColor(){
    this.btnColor = this.btnColor =='btn-primary' ? 'btn-danger' : 'btn-primary';
    this.btnClasses =[
      'btn', this.btnColor
  
    ];
  }

  color:string = "red";
  size = 10;
  increamnet(){
    this.size++

  }


  usr=""
  pwd=""

  username1="";
  password1="";

  showPara=true;
  showPara1=true;
  showPara2=true;

  users:Login[]= [
    {username:'admin', pwd:'admin'},
    {username:'john', pwd:'jhon123'},
    {username:'alice', pwd:'alice123'},
    {username:'bob', pwd:'bob123'},
  ]

  ngOnInit(): void {
  }

}
