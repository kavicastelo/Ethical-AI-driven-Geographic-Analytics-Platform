import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {CredentialService} from "../../../services/credential.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  passwordForm = new FormGroup({
    currentPassword: new FormControl(null,[
      Validators.required
    ]),
    newPassword: new FormControl(null,[
      Validators.required
    ])
  })

  isLoading:boolean = false;

  constructor(private cookieService: AuthService, private userService: UserService, private credentialService: CredentialService, private matSnackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    return this.cookieService.userEmail()
  }

  onSubmit() {
    this.isLoading = true;
    if (this.passwordForm.valid) {
      this.credentialService.getCredentialByEmail(this.loadUser()).subscribe(
        (data) => {
          this.isLoading = false;
          if (data.password === this.passwordForm.value.currentPassword) {
            this.credentialService.updateCredentialsByEmail({
              id: data.id,
              email: data.email,
              password: this.passwordForm.value.newPassword
            }).subscribe(res => {
              this.passwordForm.reset();
              this.isLoading = false;
              this.openSnackBar('Password updated successfully', 'Close');
            }, error => {
              this.isLoading = false;
              this.openSnackBar('Error updating password', 'Close');
            })
          } else {
            this.isLoading = false;
            this.openSnackBar('Current password is incorrect', 'Close');
          }
        }
      )
    }
  }

  deleteAccount() {
    if (confirm("Are you sure you want to delete your account?")) {
      this.isLoading = true;
      this.userService.getUserByEmail(this.loadUser()).subscribe(res => {
        const id = res.id;
        this.userService.deleteUser(id).subscribe(res => {
          this.isLoading = false;
          this.cookieService.logout();
          this.isLoading = false;
          this.router.navigate(['/login']);
          this.openSnackBar('Account deleted successfully', 'Close');
        }, error => {
          this.isLoading = false;
          this.openSnackBar('Error deleting account', 'Close');
        })
        this.credentialService.deleteCredentials(id).subscribe(res => {
          this.isLoading = false;
        }, error => {
          this.isLoading = false;
          this.openSnackBar('Error deleting credentials', 'Close');
        })
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
