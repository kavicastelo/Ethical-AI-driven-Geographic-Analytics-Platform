import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-authorized',
  templateUrl: './authorized.component.html',
  styleUrls: ['./authorized.component.scss']
})
export class AuthorizedComponent implements OnInit {
  userProfile: any;

  constructor(private cookieService: AuthService) { }
  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    if (this.userProfile === null || this.userProfile === undefined){
      location.reload()
    } else{
      this.cookieService.googleLogin(this.userProfile);
      this.cookieService.googleLoginName(this.userProfile.name);
      this.cookieService.googleLoginEmail(this.userProfile.email);
      this.cookieService.googleLoginPicture(this.userProfile.picture);
      this.cookieService.googleLoginFamilyName(this.userProfile.family_name);
    }
  }

}
