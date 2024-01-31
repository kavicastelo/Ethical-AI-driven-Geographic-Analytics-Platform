import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-metrological-data',
  templateUrl: './metrological-data.component.html',
  styleUrls: ['./metrological-data.component.scss']
})
export class MetrologicalDataComponent implements OnInit {

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Logic to update active class based on the current route
        this.updateActiveClass();
      }
    })
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
