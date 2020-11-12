import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
