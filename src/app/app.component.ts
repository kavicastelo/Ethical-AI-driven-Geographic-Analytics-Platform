import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./services/theme.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  isNavbar: boolean = true;
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  closeNoticeBar() {
    this.isNavbar = false;
  }
}
