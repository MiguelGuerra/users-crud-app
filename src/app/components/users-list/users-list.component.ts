import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  language = '';
  pageName = 'usersList';
  displayNames: any = {};

  users: User[] = [];

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private constantsService: ConstantsService,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });

    this.users = this.mainService.getUsers();
  }

  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantsService.displayNames[this.language][this.pageName];
  }

  editUser(id: number) {
    this.router.navigateByUrl(`user/${id}`);
  }

  deleteUser(id: number) {
    console.log("delete" + id)
  }
}
