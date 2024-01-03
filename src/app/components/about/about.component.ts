import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {NgClass, NgFor} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {countries} from "../../shared/store/country-data-store";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  platformName = 'Ethical AI-driven Geographic Analytics Platform';

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: '../shared/sign-up/sign-up.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, NgClass, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule, NgFor],
})
export class SignUpComponent {

  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  countries: any = countries;

  signupForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl(null, [
      Validators.required
    ]),
    country: new FormControl(null, [
      Validators.required
    ]),
    remarks: new FormControl(null)
  })

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  submit() {

  }
}
