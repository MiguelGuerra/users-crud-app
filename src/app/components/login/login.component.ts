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
    })

    submittedForm.reset();
  }

  onLogin(submittedForm: NgForm) {
    const email = submittedForm.value.email;
    const password = submittedForm.value.password;

    if(!submittedForm.valid) {
      return;
    }

    this.authService.loginUser(email, password).subscribe(res => {
      //console.log(res);
      // console.log(res.success + " -> " + res.token  + " -> " +  res.role)
      if(res.success && res.token && res.role) {
        this.headerService.isLoggedIn = true;
        this.headerService.userType = res.role;
        this.headerService.userToken = res.token;

        this.router.navigateByUrl('/dashboard')

        console.log(this.headerService.isLoggedIn, this.headerService.userType)
      }
      
    })
  }

  changeToSignUpMode() {this.haveAccount = false;}

  changeToLoginMode() {this.haveAccount = true;}
}
