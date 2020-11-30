import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HeaderService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  haveAccount: boolean = true;
  signUpSuccess: string = '';
  signUpError: string;

  formHasError: boolean = false;
  errorMessage: string;

  formSuccess: boolean = false;
  successMessage: string;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSignUp(submittedForm: NgForm) {
    const email = submittedForm.value.email;
    const password = submittedForm.value.password;

    if(!submittedForm.valid) {
      return;
    }
    
    this.authService.registerUser(email, password).subscribe(data => {
      console.log(data);
      if(data.success) {
        this.successMessage = 'User created with success! Please login'
        this.formSuccess = true;

      } else {
        this.formSuccess = false;
        this.formHasError = true;

      }

    })

    submittedForm.reset();
    this.changeToLoginMode();
  }

  onLogin(submittedForm: NgForm) {
    const email = submittedForm.value.email;
    const password = submittedForm.value.password;

    if(!submittedForm.valid) {
      return;
    }

    this.authService.loginUser(email, password).subscribe(res => {
      if(res.success && res.token) {
        //to remove the success message from signup
        this.formSuccess = false;

        this.headerService.isLoggedIn = true;
        this.headerService.userType = res.role;
        this.headerService.userToken = res.token;
        
        //save the user name on header service
        this.headerService.setUserName(res.email);

        //if login is success go to dashboard of app
        this.router.navigateByUrl('/dashboard')
        this.formHasError = false;
        console.log(this.headerService.isLoggedIn, this.headerService.userType)

        this.headerService.setLogin(true);
      } else {
        //to remove the success message from signup
        this.formSuccess = false;

        this.errorMessage = 'Error on login';
        this.formHasError = true;
      }
      
    })
  }

  changeToSignUpMode() {this.haveAccount = false;}

  changeToLoginMode() {this.haveAccount = true;}
}
