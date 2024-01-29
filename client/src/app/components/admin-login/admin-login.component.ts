import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  signInBtn = true;
  signUpBtn = false;

  constructor(private router: Router, private cookieService: AuthService) {
  }

  ngOnInit(): void {
    // if (this.cookieService.isExists()){
    //   this.router.navigate(['/dashboard']);
    // }
    // else{
    //   this.router.navigate(['/login/signin']);
    // }
  }

  signIn(){
    this.signInBtn = true;
    this.signUpBtn = false;

    this.router.navigate(['/dashboard/administration/signin']);
  }

  signUp() {
    this.signInBtn = false;
    this.signUpBtn = true;

    this.router.navigate(['/dashboard/administration/signup']);
  }
}
