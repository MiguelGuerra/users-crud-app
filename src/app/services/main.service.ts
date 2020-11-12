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
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Manuel',
      job: 'CEO',
      email: "testxcvbn@test.com",
      role: 'Admin',
      avatarUrl: '../../../assets/img/avatars/avatar3.png'
    },
    {
      id: 3,
      name: 'Surajit',
      job: 'Front-end Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
    },
    {
      id: 4,
      name: 'Sergio',
      job: 'Full stack Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
    },
    {
      id: 5,
      name: 'Sergio',
      job: 'Full stack Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
    },
    {
      id: 6,
      name: 'Sergio',
      job: 'Full stack Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
      avatarUrl: '../../../assets/img/avatars/avatar3.png'
    }
  ]

  constructor() { }

  ngOnInit() { }

  //Users list
  getUsers() {
    return this.usersList;
  }

  getUserById(id) {
    let selectedUser = this.usersList.find(obj => {
      return obj.id == id;
    })
    return selectedUser;
  }

  deleteUserById(id) {
    for (var i = this.usersList.length - 1; i >= 0; --i) {
      if (this.usersList[i].id == id) {
        this.usersList.splice(i, 1);
      }
    }
  }

  updateUserById(id, name?: string, email?: string, job?: string, role?: string, avatarUrl?: string ) {
    let selectedUser = this.usersList.find(obj => {
      return obj.id == id;
    })
    selectedUser.name = name;
    selectedUser.email = email;
    selectedUser.job = job;
    selectedUser.role = role;
    selectedUser.avatarUrl = avatarUrl;
  }

  
  addUser(name: string, email: string, job: string, role: string ) {
    let newId = 10;
    let createdUser= {
      id: newId,
      name: name,
      email: email,
      job: job,
      role: role
    }
    this.usersList.push(createdUser);
  }
}
