import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {AdminService} from "../../../../services/admin.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private cookieService: AuthService, private adminService: AdminService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadAdmin()
  }

  loadAdmin() {
    return this.cookieService.adminEmail()
  }

  onSubmit() {
    if (this.passwordForm.valid) {
      this.adminService.getAdminByEmail(this.loadAdmin()).subscribe(
        (data) => {
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

  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }

}
