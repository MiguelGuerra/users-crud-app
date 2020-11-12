import { Component, OnInit } from '@angular/core';
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
  newUser = {
    name: '',
    email: '', 
    job: '', 
    role: ''
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mainService: MainService,
    private constantService: ConstantsService,
    private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigateByUrl('/usersList');
  }

  createNewUser() {
    this.mainService.addUser(this.newUser.name, this.newUser.email, this.newUser.job, this.newUser.role)
    this.router.navigateByUrl('/usersList');
  }

}
