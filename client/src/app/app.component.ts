import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./services/theme.service";
import { Router, NavigationEnd } from '@angular/router';
import {locationDataStore} from "./shared/store/location-data-store";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Ethical AI driven Geographic Analytics Platform';
  isNavbar: boolean = true;
  locations = locationDataStore
  isCookieBarOpen: boolean = true;

  constructor(public themeService: ThemeService, private router: Router, private cookieService: AuthService) {}

  ngOnInit() {
    if (this.cookieService.isCookiesAccepted()) {
      this.isCookieBarOpen = false;
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Logic to update active class based on the current route
        this.updateActiveClass();
      }
    });
  }

  updateActiveClass() {
    const currentRoute = this.router.url;

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.nav-link[href="${currentRoute}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  closeNoticeBar() {
    this.isNavbar = false;
  }

  isActive(s: string) {
    return this.router.url === s;
  }

  acceptAllCookies() {
    this.cookieService.acceptAllCookies();
    this.isCookieBarOpen = false;
  }

  necessaryCookiesOnly() {
    this.cookieService.necessaryCookiesOnly();
    this.isCookieBarOpen = false;
  }
}
