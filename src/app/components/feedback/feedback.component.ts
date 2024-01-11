import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {feedbackDataStore} from "../../shared/store/feedback-data-store";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  userProfile: any;
  feedbacks = feedbackDataStore;

  feedbackForm = new FormGroup({
    feedback: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
  }

  submit() {
    if(this.userProfile.name !== undefined && this.userProfile.name !== null) {
      console.log("logged")
    }
    else{
      const message = document.querySelector('.error-message') as HTMLElement;
      message.textContent = 'Please log in to submit feedback.';
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    }
  }

}
