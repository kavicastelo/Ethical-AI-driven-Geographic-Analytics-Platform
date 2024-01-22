import {Component, OnInit} from '@angular/core';
import {ThemeService} from "../../../services/theme.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(public themeService: ThemeService, private router: Router) {}

  ngOnInit() {
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
  isActive(s: string) {
    return this.router.url === s;
  }
}
