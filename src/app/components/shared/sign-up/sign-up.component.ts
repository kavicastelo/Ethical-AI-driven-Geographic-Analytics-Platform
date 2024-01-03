import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../../services/theme.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {countries} from "../../../shared/store/country-data-store";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  countries:any = countries;

  signupForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null,[
      Validators.required
    ]),
    country: new FormControl(null,[
      Validators.required
    ]),
    remarks: new FormControl(null)
  })

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

  submit() {

  }
}
