import { ConstantsService } from 'src/app/services/constants.service';
import { HeaderService } from './../services/header.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
      private headerService: HeaderService,
        private constantService: ConstantsService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.headerService.userType === this.constantService.adminRoleName) {
        return true;
      }
      return false;
  }
}
