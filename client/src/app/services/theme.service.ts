// theme.service.ts
import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = false;
  private themeSubject = new BehaviorSubject<boolean>(this.isDarkMode);

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-theme', this.isDarkMode);
    this.themeSubject.next(this.isDarkMode);
  }

  isDarkTheme() {
    return this.isDarkMode;
  }

  getThemeObservable() {
    return this.themeSubject.asObservable();
  }
}
