import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  userType='';
  language = '';
  pageName = 'usersList';
  displayNames: any = {};
  displayNamesConfirmationModal: any = {};

  showModal: boolean = false;
  
  users: User[] = [];
  selectedUserId: number;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private constantsService: ConstantsService,
    private mainService: MainService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.updateLanguage(this.headerService.getLanguage());
    this.headerService.language$.subscribe(language => {
      this.updateLanguage(language);
    });

    this.users = this.mainService.getUsers();

    //know the user type from login
    this.userType = this.headerService.getUserType()
  }

  updateLanguage(language) {
    this.language = language;
    this.displayNames = this.constantsService.displayNames[this.language][this.pageName];

    //for the confirmation modal component
    this.displayNamesConfirmationModal = this.constantsService.displayNames[this.language]['modalText'];

    //for the child title component
    this.pageTitle = this.displayNames.pageTitle;
    this.infoTitle = this.displayNames.infoTitle;
    this.iconTitle = this.displayNames.iconTitle;
  }

  editUser(id: number) {
    this.router.navigateByUrl(`user/${id}`);
  }

  deleteUser(id: number) {
    this.mainService.deleteUserById(id);
  }

  goToAddUser() {
    this.router.navigateByUrl('addUser');
  }

  openModal(id) {
    this.showModal = true;
    this.selectedUserId = id;
  }

  handleDeleteConfirm() {
    this.deleteUser(this.selectedUserId);
    this.showModal = false;
  }

  handleModalClose() {
    this.showModal = false;
  }
}
