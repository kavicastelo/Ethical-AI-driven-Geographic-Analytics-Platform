import {Component, OnInit} from '@angular/core';
import {userPolicyDataStore} from "../../shared/store/user-policy-data-store";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  policy: any = userPolicyDataStore

  ngOnInit(): void {

  }
}
