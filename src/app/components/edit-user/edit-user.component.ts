import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  language = '';
  pageName = 'editUser';
  displayNames: any = {};

  userId;
  userToEdit: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private constantService: ConstantsService,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    //get the user id selected from previous page
    let userId = this.activatedRoute.snapshot.paramMap.get('id');
    let selectedUser = this.mainService.getUserById(userId);
    this.userId = userId;
    this.userToEdit = selectedUser;

    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
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
  
  goBack(): void {
    this.router.navigateByUrl('/usersList');
  }

  updateUserInfo() {
    this.mainService.updateUserById(
      this.userId,
      "hugo",
      "email novo",
      "",
      "",
      "../../../assets/img/avatars/avatar1.png");

    this.router.navigateByUrl('/usersList');
  }

}
