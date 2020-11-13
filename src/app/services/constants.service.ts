import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  adminRoleName = 'Admin';
  normalUser = 'Users';

  appName = 'Crud App Angular';
  SAMLToken =  '';
  userId = 'miguel';
  sessionId = '';
  appUrl = '';
  countryName = '';
  userRoles = 'tecAdmin';
  fullName = 'Miguel Guerra';
  // appUrl = 'http://sag-tec-dev-03:5555';

  // appName = window['appName'];
  // SAMLToken =  window['SAMLToken'];
  // userId = window['userId'];
  // fullName = window['fullName'];
  // sessionId = window['sessionId'];
  // appUrl = window['endpointAddress'];
  // userRoles = window['loggedInUserRoles'];

  //urls for the APIs
  restUrls = {
    SAMLUrl: this.appUrl,
    listOfUsers: this.appUrl + '/api/listOfUsers',
    createUser: this.appUrl + '/api/createUser',
    deleteUser: this.appUrl + '/api/deleteUser',
    listOfDepartments: this.appUrl + '/api/listOfDepartments',
    createDepartment: this.appUrl + '/api/createDepartment',
    deleteDepartment: this.appUrl + '/api/deleteDepartment'
  };

  //Translations en/ar
  displayNames = {
    en: {
      layout: {
        back: 'Back'
      },
      header: {
        users: 'Users',
        departments: 'Departments',
        about: 'About'
      },
      userInfo: {
        logout: 'Logout'
      },
      usersList: {
        id: 'id',
        pageTitle: 'Users',
        infoTitle: 'List of users',
        iconTitle: 'fas fa-users'
      },
      footer: {
        copyright: 'Copyright © 2020 The Executive Council of Dubai - All rights reserved'
      },
      editUser: {
        pageTitle: 'Edit User',
        infoTitle: 'Edit the user information',
        iconTitle: 'fas fa-user-edit'
      },
      addUser: {
        pageTitle: 'Add User',
        infoTitle: 'Ceate a new user',
        iconTitle: 'fas fa-user-plus'
      },
      departmentsList: {

      },
      createDepartment: {

      },
      about: {

      },
      notFoundPage: {
        title: '404 Error Page',
        subTitle: 'Ups! The page you are trying to find does not exist!'
      }
    },
    ar: {
      layout: {
        back: 'عودة'
      },
      header: {
        users: 'المستخدمون',
        departments: 'الإدارات',
        about: 'حول'
      },
      userInfo: {
        logout: 'تسجيل خروج'
      },
      footer: {
        copyright: 'حقوق النشر © 2020 المجلس التنفيذي لإمارة دبي - جميع الحقوق محفوظة'
      },
      usersList: {
        id: 'هوية شخصية',
        pageTitle: 'المستخدمون',
        infoTitle: 'قائمة المستخدمين',
        iconTitle: 'fas fa-users'
      },
      editUser: {
        pageTitle: 'تحرير العضو',
        infoTitle: 'قم بتحرير معلومات المستخدم',
        iconTitle: 'fas fa-user-edit'
      },
      addUser: {
        pageTitle: 'إضافة مستخدم',
        infoTitle: 'إنشاء مستخدم جديد',
        iconTitle: 'fas fa-user-plus'
      },
      departmentsList: {

      },
      createDepartment: {

      },
      about: {

      },
      notFoundPage: {
        title: '404 صفحة خطأ',
        subTitle: 'يو بي إس! الصفحة التي تحاول البحث عنها غير موجودة!'
      }
    }
  }


  constructor() { }

}
