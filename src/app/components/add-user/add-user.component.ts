import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from 'src/app/services/header.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit { 
  //for the title child component
  pageTitle: string = '';
  infoTitle: string = '';
  iconTitle: string = '';

  language = '';
  pageName = 'addUser';
  displayNames: any = {};

  //info of new user to create
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
  
  //for template-driven form
  onSubmit(form: NgForm) { 
    if(form.invalid) {
      alert("Invalid Input");
    } else {
      this.createNewUser();
    }
  }

  createNewUser() {
    this.mainService.addUser(
      this.userNewInfo.name, 
      this.userNewInfo.email, 
      this.userNewInfo.job, 
      this.userNewInfo.role, 
      this.userNewInfo.avatarUrl).subscribe(newUser => {
        console.log(newUser);
      })
      
    this.router.navigateByUrl('/usersList');
  }

  clearForm() {
    this.userNewInfo.name = '';
    this.userNewInfo.email = '';
    this.userNewInfo.job = '';
    this.userNewInfo.role = '';
    this.userNewInfo.avatarUrl = '';
  }

  selectAvatar(selectedAvatar) {
    this.userNewInfo.avatarUrl = selectedAvatar;
    console.log(selectedAvatar);
  }

}
