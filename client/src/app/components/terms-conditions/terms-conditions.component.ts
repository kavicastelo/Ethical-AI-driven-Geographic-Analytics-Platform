import {Component, OnInit} from '@angular/core';
import {userTermsDataStore} from "../../shared/store/user-terms-data-store";
import {UserTermsService} from "../../services/user-terms.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {
  terms:any;

  constructor(private termsService: UserTermsService, private matSnackBar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.loadUserTerms()
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  loadUserTerms() {
    this.termsService.getAllUserTerms().subscribe((data) => {
      if (data.length > 0) {
        this.terms = data;
      }
      else {
        this.terms = [{
          id: 0,
          content: 'USER TERMS ARE CURRENTLY UNAVAILABLE! SORRY FOR THE INCONVENIENCE.',
          date: this.loadDate()
        }];
      }
      return this.terms
    }, error => {
      this.openSnackBar('Error loading terms', 'Close');
    })
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }

}
