import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  userType = '';
  language = 'en';
  language$: BehaviorSubject<string> = new BehaviorSubject('en');

  constructor() { }

  // Method for getting language
  getLanguage() {
    return this.language;
  }
}
