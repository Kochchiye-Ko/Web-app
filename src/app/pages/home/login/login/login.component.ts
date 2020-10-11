import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = '';   //validation error handle
  error: { name: string, message: string } = { name: '', message: '' }; //for firebase error handle

  hide = true;
  constructor(private authservice: AuthService, private router: Router) { }


  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/dashboard'])

        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])  //when we get any error redirect to login page again

        })
    }
  }

  validateForm(email, password) {
    if (email.length === 0) {
      this.errorMessage = "Please enter a valid email";
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = "Please enter password";
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = "password should be at least 6 characters";
      return false;
    }

    this.errorMessage = '';
    return true;
  }

}
