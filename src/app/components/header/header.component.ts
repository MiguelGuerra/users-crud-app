import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language = '';
  pageName = 'header';
  displayNames:any = {};
  userType = '';
  tabName='';

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private constantService: ConstantsService,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.tabName = this.headerService.getTabName();
  }

  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantService.displayNames[this.language][this.pageName];
  }

  changeLanguage(language) {
    this.updateLanguage(language);
    this.headerService.language = language;
    this.headerService.language$.next(language);
  }

  updateTabName(tabName){
    // this.loadingService.showLoading();
    this.headerService.setTabName(tabName);
    this.tabName = this.headerService.getTabName();
    // this.loadingService.hideLoading();
  }
}
