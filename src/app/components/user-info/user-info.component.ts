import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  language = '';
  pageName = 'userInfo';
  displayNames:any = {};
  userType = '';

  constructor(
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
}
