import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  //selected user info to diplay on form
  userSelected: User;
  userId;

  //new info to update selected user
  userNewInfo = {
    name: '',
    email: '',
    job: '',
    role: '',
    avatarUrl: ''
  };

  //this could be a service
  avatarsList: Array<string> = [
    '../../../assets/img/avatars/avatar1.png',
    '../../../assets/img/avatars/avatar2.png',
    '../../../assets/img/avatars/avatar3.png',
    '../../../assets/img/avatars/avatar4.png',
    '../../../assets/img/avatars/avatar5.png'
  ];

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
    this.userSelected = selectedUser;

    //replicate selected user info to new user
    this.userNewInfo.name= this.userSelected.name;
    this.userNewInfo.email= this.userSelected.email;
    this.userNewInfo.job= this.userSelected.job;
    this.userNewInfo.role= this.userSelected.role;
    this.userNewInfo.avatarUrl= this.userSelected.avatarUrl;

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
  
  //for template-driven form
  onSubmit(form: NgForm) { 
    if(form.invalid) {
      alert("Invalid Input");
    } else {
      this.updateUserInfo();
    }
  }

  updateUserInfo() {
    this.mainService.updateUserById(
      this.userId,
      this.userNewInfo.name,
      this.userNewInfo.email,
      this.userNewInfo.job,
      this.userNewInfo.role,
      this.userNewInfo.avatarUrl);

    this.router.navigateByUrl('/usersList');
  }

  resetForm(){
    this.userNewInfo.name = this.userSelected.name;
    this.userNewInfo.email = this.userSelected.email;
    this.userNewInfo.job = this.userSelected.job;
    this.userNewInfo.role = this.userSelected.role;
    this.userNewInfo.avatarUrl = this.userSelected.avatarUrl;
  }

  clearForm() {
    this.userNewInfo.name = '';
    this.userNewInfo.email = '';
    this.userNewInfo.job = '';
    this.userNewInfo.role = '';
    this.userNewInfo.avatarUrl = '';
  }

  onChange(inputName) {
    console.log(inputName);
  }

  selectAvatar(selectedAvatar) {
    this.userNewInfo.avatarUrl = selectedAvatar;
    console.log(selectedAvatar);
  }
}
