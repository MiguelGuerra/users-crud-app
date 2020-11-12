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
  }

  goBack(): void {
    this.router.navigateByUrl('/usersList');
  }

  updateUserInfo(){
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
