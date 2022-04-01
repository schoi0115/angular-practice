import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  constructor(private fb:FormBuilder) {
 
   }
  registerForm:FormGroup=new FormGroup({});
  submitForm(){
    console.log("The DTO capture is:")
    this.registerForm.value

  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'name':['',[Validators.required, Validators.pattern("^\\w+$")]],
      'email':["",[Validators.email, Validators.maxLength(10), Validators.minLength(5)]],
      'password':['',[Validators.required, Validators.pattern("^[0-9]\\w+$")]],
      'yearOfBirth':[2022, Validators.max(2022)],
      'gender':['S',[Validators.required, Validators.pattern("^F|M|O&")]],

    })
  }

}
