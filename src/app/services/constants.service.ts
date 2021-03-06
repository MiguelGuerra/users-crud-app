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
  countryName = '';
  userRoles = 'tecAdmin';
  fullName = 'Miguel Guerra';
  appUrl = 'http://localhost:5000';

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
    registerUser: this.appUrl + '/api/auth/register',
    loginUser: this.appUrl +  '/api/auth/login',
    listOfUsers: this.appUrl + '/api/users',
    createUser: this.appUrl + '/api/users',
    deleteUser: this.appUrl + '/api/users',
    editUser: this.appUrl + '/api/users',
    listOfDepartments: this.appUrl + '/api/departments',
    createDepartment: this.appUrl + '/api/departments',
    deleteDepartment: this.appUrl + '/api/departments',
    editDepartment: this.appUrl + '/api/departments',
    dashboardLineData: this.appUrl + '/api/dashboard/lineChartData',
    dashboardPieData: this.appUrl + '/api/dashboard/pieChartData',
    dashboardBarData: this.appUrl + '/api/dashboard/barChartData'
  };

  //Translations en/ar
  displayNames = {
    en: {
      modalText: {
        confirmDeleteTitle: 'Are you sure you want to delete?',
        yes: 'Yes',
        no: 'No'
      },
      layout: {
        back: 'Back'
      },
      header: {
        users: 'Users',
        departments: 'Departments',
        about: 'About',
        dashboard: 'Dashboard'
      },
      dashboard: {
        pageTitle: 'Dashboard',
        infoTitle: 'Application charts',
        iconTitle: 'fas fa-chart-pie'
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
        pageTitle: 'Departments list',
        infoTitle: 'List of al company departments',
        iconTitle: 'fas fa-building'
      },
      editDepartment: {
        pageTitle: 'Edit Department',
        infoTitle: 'Edit the department info',
        iconTitle: 'fas fa-edit'
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
      modalText: {
        confirmDeleteTitle: 'هل أنت متأكد أنك تريد حذف؟',
        yes: 'نعم',
        no: 'لا'
      },
      layout: {
        back: 'عودة'
      },
      header: {
        users: 'المستخدمون',
        departments: 'الإدارات',
        about: 'حول',
        dashboard: 'لوحة القيادة'
      },
      dashboard: {
        pageTitle: 'لوحة القيادة',
        infoTitle: 'مخططات التطبيق',
        iconTitle: 'fas fa-chart-pie'
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
        pageTitle: 'قائمة الأقسام',
        infoTitle: 'قائمة أقسام الشركة',
        iconTitle: 'fas fa-building'
      },
      editDepartment: {
        pageTitle: 'تحرير القسم',
        infoTitle: 'تحرير معلومات القسم',
        iconTitle: 'fas fa-edit'
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
