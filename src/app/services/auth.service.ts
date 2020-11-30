import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountUser } from '../models/account-user';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private constantsService: ConstantsService) { }

  loginUser(email: string, password: string) {
    return this.http.post<AccountUser>(this.constantsService.restUrls.loginUser, {
      email: email,
      password: password
    });
  }

  registerUser(email: string, password: string) {
    return this.http.post<AccountUser>(this.constantsService.restUrls.registerUser, {
      email: email,
      password: password
    });
  }
}
