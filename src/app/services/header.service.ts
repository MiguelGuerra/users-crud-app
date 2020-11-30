import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  isLoggedIn: boolean = false;

  //Admin or Tec
  userType: string = '';
  userToken: string = '';
  userName: string = '';

  language = 'en';
  language$: BehaviorSubject<string> = new BehaviorSubject('en');
  tabName: string = 'dashboard';

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

  // Method for getting tabname
  getTabName() {
    return this.tabName;
  }

  // Method for seting tabname
  setTabName(tabName) {
    this.tabName = tabName;
  }

  //set user name after login
  setUserName(name: string) {
    this.userName = name;
  }

  //get user name after login
  getUserName() {
    return this.userName;
  }

  //set user logged in
  setLogin(state: boolean) {
    this.isLoggedIn = state;
  }
}
