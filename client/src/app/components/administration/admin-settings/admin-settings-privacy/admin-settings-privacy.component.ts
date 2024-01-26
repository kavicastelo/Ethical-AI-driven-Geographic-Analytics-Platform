import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {AdminService} from "../../../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-settings-privacy',
  templateUrl: './admin-settings-privacy.component.html',
  styleUrls: ['./admin-settings-privacy.component.scss']
})
export class AdminSettingsPrivacyComponent implements OnInit {

  passwordForm = new FormGroup({
    currentPassword: new FormControl(null,[
      Validators.required
    ]),
    newPassword: new FormControl(null,[
      Validators.required
    ])
  })

  isLoading:boolean = false;

  constructor(private cookieService: AuthService, private adminService: AdminService, private matSnackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
    this.loadAdmin()
  }

  loadAdmin() {
    return this.cookieService.adminEmail()
  }

  onSubmit() {
    this.isLoading = true;
    if (this.passwordForm.valid) {
      this.adminService.getAdminByEmail(this.loadAdmin()).subscribe(
        (data) => {
          this.isLoading = false;
          if (data.password === this.passwordForm.value.currentPassword) {
            this.adminService.updateAdminPassword({
              id: data.id,
              name: data.name,
              email: data.email,
              phone: data.phone,
              password: this.passwordForm.value.newPassword
            }).subscribe(res => {
              this.passwordForm.reset();
              this.openSnackBar('Password updated successfully', 'Close');
            }, error => {
              this.openSnackBar('Error updating password', 'Close');
            })
          } else {
            this.openSnackBar('Current password is incorrect', 'Close');
          }
        }
      )
    }
  }

  deleteAccount() {
    if (confirm("Are you sure you want to delete your account?")) {
      this.isLoading = true;
      this.adminService.deleteAdminByEmail(this.loadAdmin()).subscribe(res => {
        this.cookieService.logoutAdmin();
        this.isLoading = false;
        this.router.navigate(['/login']);
        this.openSnackBar('Account deleted successfully', 'Close');
      }, error => {
        this.openSnackBar('Error deleting account', 'Close');
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }

}
