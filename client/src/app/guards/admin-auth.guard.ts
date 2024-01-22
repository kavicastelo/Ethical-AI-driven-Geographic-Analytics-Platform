import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private cookieService: AuthService,
              private route: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.cookieService.isAdmin()) {
      return true;
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }

}
