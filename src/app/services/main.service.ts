import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class MainService implements OnInit {
  usersList: User[] = [
    {
     id: 1,
     name: 'Miguel',
     job: 'UI Developer',
     email: "testxcvbn@test.com",
     role: 'Admin'
    },
    {
     id: 2,
     name: 'Manuel',
     job: 'CEO',
     email: "testxcvbn@test.com",
     role: 'Admin'
    },
    {
     id: 3,
     name: 'Surajit',
     job: 'Front-end Developer',
     email: "testxcvbn@test.com",
     role: 'Normal'
    },
    {
     id: 4,
     name: 'Sergio',
     job: 'Full stack Developer',
     email: "testxcvbn@test.com",
     role: 'Normal'
    },
    {
     id: 5,
     name: 'Sergio',
     job: 'Full stack Developer',
     email: "testxcvbn@test.com",
     role: 'Normal'
    },
    {
     id: 6,
     name: 'Sergio',
     job: 'Full stack Developer',
     email: "testxcvbn@test.com",
     role: 'Normal'
    }
  ] 

  constructor() { }

  ngOnInit() {}

  getUsers() {
    return this.usersList;
  }
}
