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
  departmentsList: Department[] = []

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
    return this.http.get<Department[]>(this.constantService.restUrls.listOfDepartments);
  }

  getDepartmentById(id) {
    return this.http.get<Department>(`${this.constantService.restUrls.editDepartment}/${id}`);
  }

  deleteDepartmentById(id) {
    return this.http.delete(`${this.constantService.restUrls.deleteDepartment}/${id}`);
  }

  updateDepartmentById(id: string, name: string, numberOfEmployees: string, responsable: string) {
    const newInfoDepartment: Department = {
      "name": name,
      "numberOfEmployees": numberOfEmployees,
      "responsable": responsable
    }
    return this.http.patch(`${this.constantService.restUrls.editDepartment}/${id}`, newInfoDepartment);
  }


  addDepartment(id:string, name: string, numberOfEmployees: number, responsable: string) {
    let createdDepartment = {
      name: name,
      numberOfEmployees: numberOfEmployees,
      responsable: responsable
    }
    return this.http.post<Department>(this.constantService.restUrls.createDepartment, createdDepartment);
  }
}
