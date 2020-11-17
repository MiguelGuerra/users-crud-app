import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Department } from 'src/app/models/department.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }

// /** Constants used to fill up our data base. */
// const COLORS: string[] = [
//   'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
//   'aqua', 'blue', 'navy', 'black', 'gray'
// ];
// const NAMES: string[] = [
//   'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
//   'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
// ];

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html', 
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit , AfterViewInit  {
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  userType='';
  language = '';
  pageName = 'departmentsList';
  displayNames: any = {};

  departmentsList: Department[] = [];

  displayedColumns: string[] = ['id', 'name', 'numberOfEmployees', 'responsable'];
  dataSource: MatTableDataSource<Department>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private constantService: ConstantsService,
    private headerService: HeaderService,
    private mainService: MainService) { 
      // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

      // Assign the data to the data source for the table to render
    }
    
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });

    this.departmentsList = this.mainService.getDepartments();

    //know the user type from login
    this.userType = this.headerService.getUserType()
    this.dataSource = new MatTableDataSource(this.departmentsList);
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

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }