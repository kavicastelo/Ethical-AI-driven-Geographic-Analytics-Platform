import {Component, OnInit} from '@angular/core';
import {userPolicyDataStore} from "../../../../shared/store/user-policy-data-store";

@Component({
  selector: 'app-admin-settings-user-policy',
  templateUrl: './admin-settings-user-policy.component.html',
  styleUrls: ['./admin-settings-user-policy.component.scss']
})
export class AdminSettingsUserPolicyComponent implements OnInit {
  markdownContent: string = '';
  markdownData: any = userPolicyDataStore;

  ngOnInit(): void {
    if (this.markdownData !== null) {
      this.markdownContent = this.markdownData[0].markdownContent;
    }
  }

  log() {
    console.log(this.markdownContent)
  }
}
