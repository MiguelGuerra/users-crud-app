import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { UsersListComponent } from './components/users-list/users-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/usersList',
    pathMatch: 'full'
  },
  {
    path: 'usersList',
    component: UsersListComponent
  },
  {
    path: 'user/:id',
    component: EditUserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'departments',
    component: DepartmentsComponent
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
