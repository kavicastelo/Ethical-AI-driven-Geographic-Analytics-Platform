import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class FeedbackGuard implements CanActivate {

  constructor(private cookieService:AuthService,
              private route:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.cookieService.isUserProfileName()){
      return true;
    }
    else{
      this.route.navigateByUrl('/authorize');
      return false;
    }
  }
}
