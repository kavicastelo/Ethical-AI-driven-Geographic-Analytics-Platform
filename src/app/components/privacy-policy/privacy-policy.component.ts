import {Component, OnInit} from '@angular/core';
import {userPolicyDataStore} from "../../shared/store/user-policy-data-store";
import {UserPolicyService} from "../../services/user-policy.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  policy: any;

  constructor(private userPolicyService: UserPolicyService, private matSnackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.loadUserPolicy();
  }

  loadDate(){
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  loadUserPolicy(){
    this.userPolicyService.getAllUserPolicies().subscribe(
      (data: any) => {
        if (data.length > 0){
          this.policy = data;
        }
        else{
          this.policy = [{
            id: 0,
            markdownContent: 'USER POLICY IS CURRENTLY UNAVAILABLE! SORRY FOR THE INCONVENIENCE.',
            date: this.loadDate()
          }];
        }
        return this.policy
      }
    )
  }
}
