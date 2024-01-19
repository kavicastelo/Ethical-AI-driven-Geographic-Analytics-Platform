import { Component } from '@angular/core';
import {userPolicyDataStore} from "../../../../shared/store/user-policy-data-store";
import {userTermsDataStore} from "../../../../shared/store/user-terms-data-store";
import {UserTermsService} from "../../../../services/user-terms.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-admin-settings-user-terms',
  templateUrl: './admin-settings-user-terms.component.html',
  styleUrls: ['./admin-settings-user-terms.component.scss']
})
export class AdminSettingsUserTermsComponent {
  markdownContent: string = '';
  markdownData: any;
  saveBtnDisabled: boolean = false

  constructor(
    private userTermsService: UserTermsService,
    private matSnackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.loadUserTerms()
  }

  loadUserTerms() {
    this.userTermsService.getAllUserTerms().subscribe(
      (data: any) => {
        this.markdownData = data;
        if (this.markdownData !== null && this.markdownData.length > 0) {
          this.markdownContent = this.markdownData[0].content;
        }
        return this.markdownData
      }
    )
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  saveTerms() {
    if (this.markdownData.length > 0) {
      this.markdownData[0].content = this.markdownContent;
      this.saveBtnDisabled = true;
      this.openSnackBar('Already have a terms in que. Try to update!', 'Close');
    }
    else {
      this.userTermsService.createUserTerms({
        id: 0,
        content: this.markdownContent,
        date: this.loadDate()
      }).subscribe(res => {
        this.openSnackBar('Terms saved successfully', 'Close');
      }, error => {
        this.openSnackBar('Error saving terms', 'Close');
      })
    }
  }

  updateTerms() {

  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
