import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html', 
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  userType='';
  language = '';
  pageName = 'departmentsList';
  displayNames: any = {};

  departmentsList: Department[] = [];

  constructor(
    private constantService: ConstantsService,
    private headerService: HeaderService,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });

    this.departmentsList = this.mainService.getDepartments();

    //know the user type from login
    this.userType = this.headerService.getUserType()
  }

  
  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantService.displayNames[this.language][this.pageName];
    
    //for the child title component
    this.pageTitle = this.displayNames.pageTitle;
    this.infoTitle = this.displayNames.infoTitle;
    this.iconTitle = this.displayNames.iconTitle;
  }

}
