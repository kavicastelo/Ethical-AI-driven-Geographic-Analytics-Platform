import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ThemeService} from "../../../services/theme.service";
import {ContactService} from "../../../services/contact.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  contactForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(private themeService: ThemeService, private contactService: ContactService, private matSnackBar: MatSnackBar) {
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
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value.name, this.contactForm.value.email, this.contactForm.value.message).subscribe( res => {
        this.contactForm.reset();
        this.openSnackbar("Message Sent Successfully")
      });
    }
    else {
      this.openSnackbar("Please Fill All Details")
    }
  }

  openSnackbar(message: string) {
    this.matSnackBar.open(message, 'OK', {
      duration: 3000
    })
  }
}
