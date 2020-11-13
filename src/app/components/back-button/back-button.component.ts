import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { HeaderService } from 'src/app/services/header.service';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {
  language = '';
  pageName = 'layout';
  displayNames: any = {};

  constructor(
    private _location: Location,
    private constantService: ConstantsService,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });
  }

  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantService.displayNames[this.language][this.pageName];
  }
  
  goBack(): void {
    this._location.back();
  }
}
