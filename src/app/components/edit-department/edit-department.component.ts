import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  userType = '';
  language = '';
  pageName = 'editDepartment';
  displayNames: any = {};

  //selected department info to display on form
  departmentSelected: Department;
  departmentId;

  //new info to update selected department
  departmentNewInfo = {
    name: '',
    numberOfEmployees: null,
    responsable: ''
  };
  
  //initial info of department to check if info was changed on submit
  departmentInitialInfoReceived: Department;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private constantService: ConstantsService,
    private headerService: HeaderService,
    private mainService: MainService) {
  }

  ngOnInit(): void {//get the department id selected from previous page
    let departmentId = this.activatedRoute.snapshot.paramMap.get('id');
    let selectedDepartment = this.mainService.getDepartmentById(departmentId);
    this.departmentId = departmentId;
    this.departmentSelected = selectedDepartment;

    //replicate selected department info to new department
    this.departmentNewInfo.name= this.departmentSelected.name;
    this.departmentNewInfo.numberOfEmployees= this.departmentSelected.numberOfEmployees;
    this.departmentNewInfo.responsable= this.departmentSelected.responsable;

    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });

    //know the user type from login
    this.userType = this.headerService.getUserType()

    
    this.departmentInitialInfoReceived = JSON.parse(JSON.stringify(this.departmentNewInfo));
  }

  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantService.displayNames[this.language][this.pageName];

    //for the child title component
    this.pageTitle = this.displayNames.pageTitle;
    this.infoTitle = this.displayNames.infoTitle;
    this.iconTitle = this.displayNames.iconTitle;
  }
   //for template-driven form
   onSubmit(form: NgForm) { 
    let wasInfoChanged = JSON.stringify(this.departmentNewInfo)  === JSON.stringify(this.departmentInitialInfoReceived) ? false : true;

    if(wasInfoChanged){
      if(form.invalid) {
        alert("Invalid Inputs");
      } else {
        this.updateDepartmentInfo();
      }
    } else {
      alert("Info wasn´t changed!")
    }
  }

  updateDepartmentInfo() {
    this.mainService.updateDepartmentById(
      this.departmentId,
      this.departmentNewInfo.name,
      this.departmentNewInfo.numberOfEmployees,
      this.departmentNewInfo.responsable);

    this.router.navigateByUrl('/departments');
  }

  resetForm(){
    this.departmentNewInfo.name = this.departmentSelected.name;
    this.departmentNewInfo.numberOfEmployees = this.departmentSelected.numberOfEmployees;
    this.departmentNewInfo.responsable = this.departmentSelected.responsable;
  }

  clearForm() {
    this.departmentNewInfo.name = '';
    this.departmentNewInfo.numberOfEmployees = '';
    this.departmentNewInfo.responsable = '';
  }
}
