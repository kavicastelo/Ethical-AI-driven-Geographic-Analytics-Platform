import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-settings-user-policy',
  templateUrl: './admin-settings-user-policy.component.html',
  styleUrls: ['./admin-settings-user-policy.component.scss']
})
export class AdminSettingsUserPolicyComponent implements OnInit {
  markdownContent: string = '';

  ngOnInit(): void {
  }

  log() {
    console.log(this.markdownContent)
  }
}
