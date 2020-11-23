import { Injectable, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { User } from '../models/user.model';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class MainService implements OnInit {
  departmentsList: Department[] = [
    {
      id: 1,
      name: 'Information Tecnology',
      numberOfEmployees: 1500,
      responsable: 'Jonh Doe',
      priority: 'Low',
      tecnologiesOptions: ['Powerpoint', 'One Note', 'Word'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 2,
      name: 'Human Resources',
      numberOfEmployees: 65,
      responsable: 'Jonh Doe',
      priority: 'Low',
      tecnologiesOptions: ['Excel', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 3,
      name: 'Information Tecnology',
      numberOfEmployees: 175,
      responsable: 'Jonh Doe',
      priority: 'High',
      tecnologiesOptions: ['Powerpoint', 'One Note', 'Word', 'Excel'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 4,
      name: 'Human Resources',
      numberOfEmployees: 53,
      responsable: 'Jonh Doe',
      priority: 'High',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 5,
      name: 'Information Tecnology',
      numberOfEmployees: 5,
      responsable: 'Jonh Doe',
      priority: 'High',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 6,
      name: 'Human Resources',
      numberOfEmployees: 54,
      responsable: 'Jonh Doe',
      priority: 'Medium',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 7,
      name: 'Information Tecnology',
      numberOfEmployees: 1445,
      responsable: 'Jonh Doe',
      priority: 'Low',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 8,
      name: 'Human Resources',
      numberOfEmployees: 5876,
      responsable: 'Jonh Doe',
      priority: 'High',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 9,
      name: 'Information Tecnology',
      numberOfEmployees: 15,
      responsable: 'Jonh Doe',
      priority: 'Medium',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 10,
      name: 'Human Resources',
      numberOfEmployees: 5,
      responsable: 'Jonh Doe',
      priority: 'Low',
      tecnologiesOptions: ['Powerpoint', 'One Note', 'Word'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 11,
      name: 'Information Tecnology',
      numberOfEmployees: 15,
      responsable: 'Jonh Doe',
      priority: 'Low',
      tecnologiesOptions: ['Powerpoint', 'One Note'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    },
    {
      id: 12,
      name: 'Human Resources',
      numberOfEmployees: 5,
      responsable: 'Jonh Doe',
      priority: 'Low',
      tecnologiesOptions: ['Powerpoint', 'One Note', 'Word'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    }
  ]

  usersList: User[] = [
    {
      id: 1,
      name: 'Miguel',
      job: 'UI Developer',
      email: "testxcvbn@test.com",
      role: 'Admin',
      avatarUrl: '../../../assets/img/avatars/avatar1.png'
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
      role: 'Normal'
    },
    {
      id: 4,
      name: 'Sergio',
      job: 'Full stack Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
      avatarUrl: '../../../assets/img/avatars/avatar2.png'
    },
    {
      id: 5,
      name: 'Sergio',
      job: 'Full stack Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
      avatarUrl: '../../../assets/img/avatars/avatar4.png'
    },
    {
      id: 6,
      name: 'Sergio',
      job: 'Full stack Developer',
      email: "testxcvbn@test.com",
      role: 'Normal',
      avatarUrl: '../../../assets/img/avatars/avatar5.png'
    }
  ]

  constructor(
    private loadingService: LoadingService,) { }

  ngOnInit() { }

   //Users list services
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

  
  addUser(name: string, email: string, job: string, role: string, avatarUrl?: string ) {
    // let lastUserOfArray = [this.usersList.length-1];
    // console.log(lastUserOfArray);
    // let newId = lastUserOfArray.id + 1;
    let numberOfUsers = this.usersList.length;
    let newId = numberOfUsers + 1;
    console.log(newId);

    //let newId = 10;
    let createdUser = {
      id: newId,
      name: name,
      email: email,
      job: job,
      role: role,
      avatarUrl: avatarUrl
    }
    this.usersList.push(createdUser);
  }

  
  //Departments list services
  getDepartments() {
    return this.departmentsList;
  }

  getDepartmentById(id) {
    let selectedDepartment = this.departmentsList.find(obj => {
      return obj.id == id;
    })
    return selectedDepartment;
  }

  deleteDepartmentById(id) {
    for (var i = this.departmentsList.length - 1; i >= 0; --i) {
      if (this.departmentsList[i].id == id) {
        this.departmentsList.splice(i, 1);
      }
    }
  }

  updateDepartmentById(id, name: string, numberOfEmployees: number, responsable: string) {
    let selectedDepartment = this.departmentsList.find(obj => {
      return obj.id == id;
    })
    selectedDepartment.name = name;
    selectedDepartment.numberOfEmployees = numberOfEmployees;
    selectedDepartment.responsable = responsable;
  }

  
  addDepartment(id, name: string, numberOfEmployees: number, responsable: string) {
    let numberOfDepartments = this.departmentsList.length;
    let newId = numberOfDepartments + 1;

    let createdDepartment = {
      id: newId,
      name: name,
      numberOfEmployees: numberOfEmployees,
      responsable: responsable,
      priority: 'Low',
      tecnologiesOptions: ['HR', 'IT', 'Arts'],
      teams: {
        topLevel: 'Team 1',
        lowLevel: ' Team 2'
      }
    }
    this.departmentsList.push(createdDepartment);
  }
}
