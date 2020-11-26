import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/models/department.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit, AfterViewInit {
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  userType = '';
  language = '';
  pageName = 'departmentsList';
  displayNames: any = {};
  displayNamesConfirmationModal: any = {};

  showModal: boolean = false;

  departmentsList: Department[] = [];
  selectedDepartmentId;

  displayedColumns: string[] = ['id', 'name', 'numberOfEmployees', 'responsable', 'actions'];
  dataSource: MatTableDataSource<Department>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private router: Router,
    private constantService: ConstantsService,
    private headerService: HeaderService,
    private mainService: MainService) {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());

    //for the confirmation modal component
    this.displayNamesConfirmationModal = this.constantService.displayNames[this.language]['modalText'];

    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });

    //know the user type from login
    this.userType = this.headerService.getUserType();

    //get all departments
    this.mainService.getDepartments().subscribe(departments => {
      this.departmentsList = departments;
      this.dataSource = new MatTableDataSource(this.departmentsList);
    });
  }

  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantService.displayNames[this.language][this.pageName];

    //for the child title component
    this.pageTitle = this.displayNames.pageTitle;
    this.infoTitle = this.displayNames.infoTitle;
    this.iconTitle = this.displayNames.iconTitle;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(id) {
    this.showModal = true;
    this.selectedDepartmentId = id;
  }

  deleteDepartment(id: number) {
    this.mainService.deleteDepartmentById(id);
  }

  handleDeleteConfirm() {
    this.mainService.deleteDepartmentById(this.selectedDepartmentId).subscribe(data => {
      console.log(data);
      this.showModal = false;

      //to update the paginator and table data
      this.dataSource = new MatTableDataSource(this.departmentsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      //get all departments again
      this.mainService.getDepartments().subscribe(departments => {
        this.departmentsList = departments;
        this.dataSource = new MatTableDataSource(this.departmentsList);
      });
    })
  }

  handleModalClose() {
    this.showModal = false;
  }

  goToEditDepartment(id) {
    this.router.navigateByUrl(`editDepartment/${id}`);
  }
}
