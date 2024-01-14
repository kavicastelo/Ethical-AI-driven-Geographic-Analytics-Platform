import { Component } from '@angular/core';
import {userPolicyDataStore} from "../../../../shared/store/user-policy-data-store";
import {userTermsDataStore} from "../../../../shared/store/user-terms-data-store";

@Component({
  selector: 'app-admin-settings-user-terms',
  templateUrl: './admin-settings-user-terms.component.html',
  styleUrls: ['./admin-settings-user-terms.component.scss']
})
export class AdminSettingsUserTermsComponent {
  markdownContent: string = '';
  markdownData: any = userTermsDataStore;

  ngOnInit(): void {
    if (this.markdownData !== null) {
      this.markdownContent = this.markdownData[0].content;
    }
  }

  log() {
    console.log(this.markdownContent)
  }
}
