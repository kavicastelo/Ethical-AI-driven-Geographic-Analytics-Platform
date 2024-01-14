import {Component, OnInit} from '@angular/core';
import {userTermsDataStore} from "../../shared/store/user-terms-data-store";

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  terms:any = userTermsDataStore

  ngOnInit(): void {
  }

}
