import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  loginResponse: any;
  userProfile: any;

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
    console.log(this.userProfile)
  }
}
