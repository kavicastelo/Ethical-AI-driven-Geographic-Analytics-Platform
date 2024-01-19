import {Component, OnInit} from '@angular/core';
import {userPolicyDataStore} from "../../../../shared/store/user-policy-data-store";
import {UserPolicyService} from "../../../../services/user-policy.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-settings-user-policy',
  templateUrl: './admin-settings-user-policy.component.html',
  styleUrls: ['./admin-settings-user-policy.component.scss']
})
export class AdminSettingsUserPolicyComponent implements OnInit {
  markdownContent: string = '';
  markdownData: any;
  saveBtnDisabled: boolean = false

  constructor(private userPolicyService: UserPolicyService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadUserPolicy();
  }

  loadUserPolicy() {
    this.userPolicyService.getAllUserPolicies().subscribe(
      (data: any) => {
        this.markdownData = data;
        if (this.markdownData !== null && this.markdownData.length > 0) {
          this.markdownContent = this.markdownData[0].markdownContent;
        }
        return this.markdownData
      }
    )
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  savePolicy() {
    if (this.markdownData.length > 0) {
      this.markdownData[0].markdownContent = this.markdownContent;
      this.saveBtnDisabled = true;
      this.openSnackBar('Already have a policy in que. Try to update!', 'Close');
    }
    else {
      this.userPolicyService.createUserPolicy({
        id: 0,
        markdownContent: this.markdownContent,
        date: this.loadDate()
      }).subscribe(res => {
        this.openSnackBar('Policy saved successfully', 'Close');
      }, error => {
        this.openSnackBar('Error saving policy', 'Close');
      })
    }
  }

  updatePolicy() {
    if (this.markdownData.length > 0) {
      this.userPolicyService.updateUserPolicy({
        id: this.markdownData[0].id,
        markdownContent: this.markdownContent,
        date: this.loadDate()
      }).subscribe(res => {
        this.openSnackBar('Policy updated successfully', 'Close');
        this.loadUserPolicy()
      }, error => {
        this.openSnackBar('Error updating policy', 'Close');
      })
    }
    else {
      this.openSnackBar('No policy to update. Create one first!', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
