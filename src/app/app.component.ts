import { Component, OnInit } from '@angular/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app-angular';
  
  isLoggedIn: boolean;

  constructor(
    private headerService: HeaderService) {}

  ngOnInit(): void { 
    this.isLoggedIn = this.headerService.isLoggedIn;
  }
}
