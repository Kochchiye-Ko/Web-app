import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailFormControl = new FormControl("", [Validators.required, Validators.email]);
  email = "";
  password="";
  message = '';    //message give after register
  errorMessage ='';   //validation error handle
  error: {name: string, message: string} = { name: '', message: '' }; //for firebase error handle

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  hide = true;
  constructor(private authservice: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage(){
    this.errorMessage = '';
    this.error = {name: '' , message: ''};
  }

  register(){
    this.clearErrorMessage();
    if(this.validateForm(this.email , this.password))
    {
      this.authservice.registerWithEmail(this.email , this.password)
      .then(() => {
        this.message = "You are register with data on firebase"
        //this.router.navigate(['/userinfo'])

      }).catch(_error => {
        this.error = _error
        this.router.navigate(['/register'])

      })
    }
  }

  validateForm(email , password){
    if(email.length === 0){
      this.errorMessage = "Please enter a valid email";
      return false;
    }

    if(password.length === 0){
      this.errorMessage = "Please enter password";
      return false;
    }

    if(password.length < 6){
      this.errorMessage = "password should be at least 6 characters";
      return false;
    }

    this.errorMessage = '';
    return true;
  }
}
