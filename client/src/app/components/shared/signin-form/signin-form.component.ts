import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {authDataStore} from "../../../shared/store/auth-data-store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {AdminService} from "../../../services/admin.service";
import {CredentialService} from "../../../services/credential.service";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit{

  authData:any;
  verifiedUsers:any;
  urlState:string = this.router.url;

  isLoading:boolean = false;

  constructor(private cookieService: AuthService, private snackBar: MatSnackBar, private router: Router, private userService: UserService, private adminService: AdminService, private credentialService: CredentialService) {
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
      this.credentialService.getCredentials().subscribe(res => {
        if (res.length === 0) {
          this.userService.createUser({
            id: null,
            name: 'test user',
            email: 'tester@gmail.com',
            phone: null,
            country: null,
            remarks: null,
            active: true
          }).subscribe(res => {
            this.openSnackBar('Default User Created','OK')
          })
          this.credentialService.setCredentials({
            id: null,
            email: 'tester@gmail.com',
            password: '1234'
          }).subscribe(res => {
            this.openSnackBar('Default Credentials Created','OK')
          })
          this.cookieService.createAdmin('tester@gmail.com');
          this.openSnackBar("Congratulations! You are the first user of this site and you are on tester mode. please change your credentials",'OK')
          this.router.navigate(['/dashboard']);
        }
        else {
          this.isLoading = true;
          this.userService.getUserByEmail(this.signInForm.get('email')?.value).subscribe((data: any) => {
            if (data === null) {
              this.isLoading = false;
              this.openSnackBar('User Not Found','OK')
            }
            else {
              if (data.active === false) {
                this.isLoading = false;
                this.openSnackBar('User Not Verified','OK')
              }
              else {
                this.credentialService.getCredentialByEmail(this.signInForm.get('email')?.value).subscribe((data: any) => {
                  if (data.email === this.signInForm.get('email')?.value) {
                    if (data.password === this.signInForm.get('password')?.value) {
                      this.cookieService.createUser(data.email);
                      this.isLoading = false;
                      this.router.navigate(['/dashboard']);
                    }
                    else {
                      this.isLoading = false;
                      this.openSnackBar('Password Incorrect','OK')
                    }
                  }
                  else{
                    this.isLoading = false;
                    this.openSnackBar('User Not Found','OK')
                  }
                })
              }
            }
            this.authData = data
          })
        }
      })
    }
    else if (this.urlState === '/dashboard/administration/signin') {
      this.isLoading = true;
      this.adminService.getAllAdmins().subscribe((data: any) => {
        this.isLoading = false;
        if (data.length === 0) {
          this.adminService.createAdmin({
            id: null,
            name: 'test admin',
            email: 'test-admin@gmail.com',
            phone: null,
            password: '1234'
          }).subscribe(res => {
            this.openSnackBar('Default Admin Created','OK')
            this.cookieService.createAdmin('test-admin@gmail.com');
            this.openSnackBar('Congratulations! Default Admin Created','OK')
          })
        }
        else{
          this.adminService.getAdminByEmail(this.signInForm.get('email')?.value).subscribe((data: any) => {
            this.isLoading = false;
            if (data.email === this.signInForm.get('email')?.value) {
              if (data.password === this.signInForm.get('password')?.value) {
                this.cookieService.createAdmin(data.email);
                this.isLoading = false;
                this.router.navigate(['/admin']);
                this.openSnackBar('Admin Found','OK')
              }
              else {
                this.isLoading = false;
                this.openSnackBar('Password Incorrect','OK')
              }
            }
            else{
              this.isLoading = false;
              this.openSnackBar('Admin Not Found','OK')
            }
          })
        }
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
