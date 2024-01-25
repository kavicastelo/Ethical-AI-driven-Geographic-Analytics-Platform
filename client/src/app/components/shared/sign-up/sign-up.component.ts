import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../../services/theme.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {countries} from "../../../shared/store/country-data-store";
import {UserService} from "../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
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
  isLoading: boolean = false;

  constructor(private themeService: ThemeService, private userService: UserService, private matSnackBar: MatSnackBar) {
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
    this.isLoading = true;
    if (this.signupForm.valid) {
      this.userService.getAllUsers().subscribe(res => {
        this.isLoading = false;
        for (let i = 0; i < res.length; i++) {
          if (res[i].email === this.signupForm.value.email) {
            this.openSnackbar("User Already Requested")
            return;
          }
          else {
            this.userService.createUser({
              id: null,
              name: this.signupForm.value.name,
              email: this.signupForm.value.email,
              phone: this.signupForm.value.phone,
              country: this.signupForm.value.country,
              remarks: this.signupForm.value.remarks,
              active: false
            }).subscribe( res => {
              this.isLoading = false;
              this.signupForm.reset();
              this.openSnackbar("User Requested Successfully")
            })
          }
        }
      })
    } else {
      this.openSnackbar("Please Fill All Details")
    }
  }

  openSnackbar(msg:string){
    this.matSnackBar.open(msg, 'OK', {
      duration: 3000
    })
  }
}
