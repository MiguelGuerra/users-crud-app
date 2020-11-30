import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  userName: string = '';

  constructor(
    private router: Router,
    private constantService: ConstantsService,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });
    console.log('----', this.headerService.getUserName())
    this.userName = this.headerService.getUserName();
  }
  
  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantService.displayNames[this.language][this.pageName];
  }

  logout() {
    this.router.navigateByUrl('/login'); 
    this.headerService.setLogin(false);
  }
}
