import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy  {

  @ViewChild('showLoading', {static: true}) showLoadingRef: ElementRef;
  @ViewChild('loader', {static: true}) loaderRef: ElementRef;
  public loading = {
    counter: 0,
    interval: null
  };

  subscriptions = [];

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loadingStatus$.subscribe(status => {
      if (status) {
        this.showLoading();
      } else {
        this.hideLoading();
      }
    })
  }

    // Method for showing loading image while REST call is called
    showLoading() {
      if (document.querySelector('.show-loader').classList.contains('show-loading')) {
        return;
      }
      this.loading.counter = 0;
      this.showLoadingRef.nativeElement.classList.add('show-loading');
      this.loading.interval = setInterval(() => {
        this.loading.counter++;
        this.loaderRef.nativeElement.innerHTML = this.loading.counter;
        if (this.loading.counter === 99) {
          clearInterval(this.loading.interval);
        }
      }, 100);
    }
  
    // Method for hiding loading image while REST call is called
    hideLoading() {
      this.loading.counter = 0;
      this.loaderRef.nativeElement.innerHTML = 100;
      this.showLoadingRef.nativeElement.classList.remove('show-loading');
      clearInterval(this.loading.interval);
    }
  
    // Method for releasing the component memory on destroy
    ngOnDestroy() {
      this.subscriptions.forEach(subscription => {
        subscription.unsubscribe();
      });
    }

}
