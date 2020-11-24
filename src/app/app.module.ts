import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AboutComponent } from './components/about/about.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './components/add-user/add-user.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LineComponent } from './components/echarts/line/line.component';
import { PieComponent } from './components/echarts/pie/pie.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule }  from '@angular/common/http';
import { EditDepartmentComponent } from './components/edit-department/edit-department.component';
import { BarsComponent } from './components/echarts/bars/bars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserInfoComponent,
    UsersListComponent,
    AboutComponent,
    DepartmentsComponent,
    NotFoundPageComponent,
    EditUserComponent,
    LoadingComponent,
    ConfirmationModalComponent,
    AddUserComponent,
    PageTitleComponent,
    BackButtonComponent,
    LineComponent,
    PieComponent,
    DashboardComponent,
    EditDepartmentComponent,
    BarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule, 
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule, 
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
