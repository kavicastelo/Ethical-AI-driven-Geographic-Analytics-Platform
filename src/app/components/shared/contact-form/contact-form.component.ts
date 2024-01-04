import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ThemeService} from "../../../services/theme.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  contactForm = new FormGroup({
    name: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    message: new FormControl(null,[
      Validators.required
    ])
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
