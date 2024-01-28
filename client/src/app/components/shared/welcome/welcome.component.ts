import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  user: any;

  constructor(private userService: UserService, private cookieService: AuthService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUserByEmail(this.cookieService.userEmail()).subscribe(
      res => {
        this.user = res.name
      }
    )
  }

}
