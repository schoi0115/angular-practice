import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOGIN } from '../evn';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  login: Login = new Login();

  message = "";
  username = "";
  pwd = "";


  displayMessage(username: string, pwd: string) {
    if (this.login.username == LOGIN.username && this.login.pwd == LOGIN.pwd) {
      this.message = "Welcome Admin"
      this.router.navigate(['/todo'])

    } else {
      this.message = "You are not Admin"
    }


  }



  ngOnInit(): void {
  }

}
