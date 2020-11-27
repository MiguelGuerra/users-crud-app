import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  haveAccount: boolean = true;
  signUpSuccess: string = '';
  signUpError: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSignUp(submittedForm: NgForm) {
    if(!submittedForm.valid) {
      return;
    }

    const email = submittedForm.value.email;
    const password = submittedForm.value.password;
    alert(email + " " + password);

    submittedForm.reset();
  }

  onLogin(submittedForm: NgForm) {
    if(!submittedForm.valid) {
      return;
    }

    const email = submittedForm.value.email;
    const password = submittedForm.value.password;
    alert(email + " " + password)
  }

  changeToSignUpMode() {this.haveAccount = false;}

  changeToLoginMode() {this.haveAccount = true;}
}
