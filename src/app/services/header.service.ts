import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  //Admin or Tec
  userType = 'Admin';
  language = 'en';
  language$: BehaviorSubject<string> = new BehaviorSubject('en');

  constructor() { }

  // Method for getting user type from login user
  getUserType() {
    return this.userType;
  }

  // Method for seting user type from login user
  setUserType(type) {
    this.userType = type;
  }
  
  // Method for getting language
  getLanguage() {
    return this.language;
  }
}
