import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  counter = 0;
  loadingStatus$: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }
  
  // Method for showing loading loader
  showLoading() {
    this.counter++;
    this.loadingStatus$.next(true);
  }

  // Method for hiding loading loader
  hideLoading() {
    this.counter--;
    if (this.counter === 0) {
      this.loadingStatus$.next(false);
    }
  }

}
