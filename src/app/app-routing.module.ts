import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AdminGuard } from './guards/admin.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoggedInGuard],
    children: [
    {
      path: 'usersList',
      component: UsersListComponent
    },
    {
      path: 'user/:id',
      component: EditUserComponent
      // canActivate: [AdminGuard]
    },
    {
      path: 'addUser',
      component: AddUserComponent
      // canActivate: [AdminGuard]
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'departments',
      component: DepartmentsComponent
      // canActivate: [AdminGuard]
    },
    {
      path: 'editDepartment/:id',
      component: EditDepartmentComponent
      // canActivate: [AdminGuard]
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
