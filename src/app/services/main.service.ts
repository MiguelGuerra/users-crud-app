import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { User } from '../models/user.model';
import { LoadingService } from './loading.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConstantsService } from './constants.service';

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

  usersList: User[] = []

  constructor(
    private constantService: ConstantsService,
    private loadingService: LoadingService,
    private http: HttpClient) { }

  ngOnInit() {}

  //Users list services
  getUsers() {
    return this.http.get<User[]>(this.constantService.restUrls.listOfUsers);
  }

  getUserById(id) {
    console.log(`${this.constantService.restUrls.editUser}/${id}`);
    return this.http.get<User>(`${this.constantService.restUrls.editUser}/${id}`);
  }

  deleteUserById(id) {
    return this.http.delete(`${this.constantService.restUrls.deleteUser}/${id}`);
  }

  updateUserById(id: string, name?: string, email?: string, job?: string, role?: string, avatarUrl?: string) {
    const newInfoUser: User = {
      "name": name,
      "email": email,
      "job": job,
      "role": role,
      "avatarUrl": avatarUrl
    }
    return this.http.patch(`${this.constantService.restUrls.editUser}/${id}`, newInfoUser);
  }

  addUser(name: string, email: string, job: string, role: string, avatarUrl?: string) {
    let createdUser = {
      name: name,
      email: email,
      job: job,
      role: role,
      avatarUrl: avatarUrl
    }
    return this.http.post<User>(this.constantService.restUrls.createUser, createdUser);
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
