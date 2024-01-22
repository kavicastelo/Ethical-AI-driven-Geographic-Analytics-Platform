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
  urlState:string = this.router.url;

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
    if(this.urlState === '/login/signin') {
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
    else if (this.urlState === '/dashboard/administration/signin') {
      const email:any = this.signInForm.get('email')?.value;
      const password:any = this.signInForm.get('password')?.value;
      const testEmail = 'john23@gmail.com';
      const testPassword = '1234';

      if (email === testEmail && password === testPassword) {
        this.cookieService.createAdmin(email);
        this.router.navigate(['/admin']);
        this.openSnackBar('Admin Found','OK')
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
