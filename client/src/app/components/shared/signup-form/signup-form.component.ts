import {Component, OnInit} from '@angular/core';
import {countries} from "../../../shared/store/country-data-store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CredentialService} from "../../../services/credential.service";
import {UserService} from "../../../services/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
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
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
      Validators.pattern("^[0-9]*$")
    ]),
    country: new FormControl(null, [
      Validators.required
    ]),
    remarks: new FormControl(null)
  })

  constructor(private credentialService: CredentialService, private userService: UserService, private matSnackBar: MatSnackBar, private cookieService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.signupForm.valid) {
      this.userService.getAllUsers().subscribe(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].email === this.signupForm.get('email')?.value) {
            this.openSnackbar("User Already Exists")
            return;
          }
          else{
          }
        }
        this.userService.createUser({
          id: null,
          name: this.signupForm.get('name')?.value,
          email: this.signupForm.get('email')?.value,
          phone: this.signupForm.get('phone')?.value,
          country: this.signupForm.get('country')?.value,
          remarks: this.signupForm.get('remarks')?.value,
          active: false}
        ).subscribe((res) => {
          this.cookieService.createUser(this.signupForm.get('email')?.value);
          this.signupForm.reset();
          this.router.navigate(['/dashboard']);
          this.openSnackbar("User Requested Successfully")
        }, (error) => {
          this.openSnackbar("User Request Failed")
        })
      })
    }
    else{
      this.openSnackbar("Please Fill All Fields")
    }
  }

  openSnackbar(msg:string) {
    this.matSnackBar.open(msg, 'OK', {
      duration: 3000
    })
  }

}
