import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {authDataStore} from "../../../shared/store/auth-data-store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit{

  authData:any = authDataStore;

  constructor(private cookieService: AuthService, private snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
  }

  signInForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null,[
      Validators.required
    ])
  })

  submit() {
    this.authData.forEach((item:any) => {
      if (item !== null && item !== undefined) {
        if (item.email === this.signInForm.get('email')?.value) {
          if (item.password === this.signInForm.get('password')?.value) {
            this.cookieService.createUser(this.authData.email);
            this.router.navigate(['/dashboard']);
          }
          else {
            this.openSnackBar('Password Incorrect','OK')
          }
        }
        else{
          this.openSnackBar('User Not Found','OK')
        }
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
