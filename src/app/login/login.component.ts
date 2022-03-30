import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { LOGIN } from '../evn';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login: Login = new Login();

  message = "";
  username = "";
  pwd = "";


  displayMessage(_username: string, _pwd: string) {
    if (this.login.username == LOGIN.username && this.login.pwd == LOGIN.pwd) {
      this.message = "Welcome Admin"
    } else {
      this.message = "You are not Admin"
    }


  }




  ngOnInit(): void {
  }

}
