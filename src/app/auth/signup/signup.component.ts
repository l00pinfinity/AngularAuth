import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    confirmpassword:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  constructor() { }

  ngOnInit(): void {
  }

  get username(){
    return this.signupForm.get('username')
  }

  get email(){
    return this.signupForm.get('email');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get confirmpassword(){
    return this.signupForm.get('confirmpassword')
  }

  onSignUp(){
    
  }
}
