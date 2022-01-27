import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  LoginForm = new FormGroup({
    fname:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lname:new FormControl('',[Validators.required,Validators.minLength(4)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    pswd:new FormControl('',[Validators.required,Validators.minLength(6)]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    state:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    zipcode:new FormControl('',[Validators.required]),
    check:new FormControl('',[Validators.required]),

  })
  get fname(){
    return this.LoginForm.controls
  }
  get lname(){
   return this.LoginForm.controls
 }
   get email(){
     return this.LoginForm.controls
   }
   get pswd(){
    return this.LoginForm.controls
  }
  get phone(){
    return this.LoginForm.controls
  }
  get state(){
    return this.LoginForm.controls
  }
  get check(){
   return this.LoginForm.controls
 }
   get zipcode(){
     return this.LoginForm.controls
   }
   get city(){
    return this.LoginForm.controls
  }
  
}
