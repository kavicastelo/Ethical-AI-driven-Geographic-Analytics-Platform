import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }
}
