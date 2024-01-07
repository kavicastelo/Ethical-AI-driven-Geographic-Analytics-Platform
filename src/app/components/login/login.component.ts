import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  signInBtn = true;
  signUpBtn = false;

  constructor(private themeService: ThemeService, private router: Router) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.router.navigate(['/login/signin']);
  }

  signIn(){
    this.signInBtn = true;
    this.signUpBtn = false;

    this.router.navigate(['/login/signin']);
  }

  signUp() {
    this.signInBtn = false;
    this.signUpBtn = true;

    this.router.navigate(['/login/signup']);
  }
}
